import { Input, Notification, PasswordInput } from "@mantine/core";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";
import { IconX } from "@tabler/icons-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpModal from "../../components/sign-up-modal/sign-up-modal";
import { auth } from "../../config/firebase";

const Login = () => {
  const [showSignUpMpdal, setShowSignUpModal] = useState(false);
  const [noUsersText, setNoUsersText] = useState(false);
  const navigate = useNavigate();

  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      password: isNotEmpty("Empty Password"),
    },
  });

  const handleNoUsersError = () => {
    setNoUsersText(true);
    setTimeout(() => {
      setNoUsersText(false);
    }, 1500);
  };

  const handleLogin = (values: { email: string; password: string }) => {
    try {
      const { email = "", password = "" } = values;

      const onRegister = () => {
        signInWithEmailAndPassword(auth, email, password).catch((error) =>
          // console.log(error);
          handleNoUsersError()
        );
        navigate("/");
      };
      onRegister();
    } catch (err) {
      console.log("LOGIN_ERR", err);
    }
  };

  return (
    <>
      <div className="w-full">
        <h2 className="w-full md:w-[70%] m-auto text-black text-base sm:text-3xl text-left mb-5">
          Welcome back!
        </h2>
        <div>
          {noUsersText ? (
            <div className="absolute bottom-10 right-10">
              <Notification
                className="p-5 rounded"
                icon={<IconX size="1.1rem" />}
                color="red"
              >
                <p className="text-base lg:text-2xl">No users found!</p>
              </Notification>
            </div>
          ) : null}
          <form
            className="flex flex-col gap-5 mb-3"
            onSubmit={loginForm.onSubmit((values) => handleLogin(values))}
          >
            <div>
              <Input
                size="lg"
                className="w-full md:w-[70%] m-auto placeholder:text-base text-base"
                placeholder="Email or Username"
                type="email"
                {...loginForm.getInputProps("email")}
              />
            </div>
            <div>
              <PasswordInput
                size="lg"
                className="w-full md:w-[70%] m-auto placeholder:text-base text-base"
                placeholder="Password"
                {...loginForm.getInputProps("password")}
              />
            </div>
            <div className="w-full text-center m-auto">
              <button
                type="submit"
                className="w-full h-[50px] md:w-[70%] bg-blue-500 text-white rounded m-auto active:scale-[98%]"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <p className="w-full md:w-[70%] m-auto">
          No account? click{" "}
          <span
            onClick={() => setShowSignUpModal(true)}
            className="font-bold cursor-pointer"
          >
            HERE{" "}
          </span>
          to sign up.
        </p>
      </div>

      <SignUpModal
        isModalOpen={showSignUpMpdal}
        handleModalOpen={setShowSignUpModal}
      />
    </>
  );
};

export default Login;
