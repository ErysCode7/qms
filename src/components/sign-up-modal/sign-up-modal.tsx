import { Button, Modal, PasswordInput, TextInput } from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";

type Props = {
  isModalOpen: boolean;
  handleModalOpen: Dispatch<SetStateAction<boolean>>;
};

const SignUpModal = ({ isModalOpen, handleModalOpen }: Props) => {
  const navigate = useNavigate();

  const signUpForm = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      firstName: (value) =>
        value.length < 2 ? "First name is too short" : null,
      lastName: (value) => (value.length < 2 ? "Last name is too short" : null),
      email: isEmail("Invalid email"),
      password: (value) =>
        value.length < 6 ? "Password should be at least 6 characters" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Password does not match" : null,
    },
  });

  const handleSignUp = (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }) => {
    try {
      const {
        firstName = "",
        lastName = "",
        email = "",
        password = "",
      } = values;

      console.log(firstName, lastName, email, password);

      const onRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            set(ref(db, "users/" + userCredential.user.uid), {
              firstName: firstName,
              lastName: lastName,
              email: email,
            });
          })
          .catch((error) => console.log(error));
        // navigate("/");
      };
      onRegister();
    } catch (err) {
      console.log("SIGN_UP_ERR", err);
    }
  };

  return (
    <Modal
      opened={isModalOpen}
      onClose={() => handleModalOpen(false)}
      title="Sign up"
      classNames={{
        title: "font-bold text-lg sm:text-2xl md:text-3xl",
      }}
      centered
      closeOnClickOutside={false}
    >
      <form
        onSubmit={signUpForm.onSubmit((values) => handleSignUp(values))}
        className="pt-2 pb-5 flex flex-col gap-1"
      >
        <div>
          <TextInput
            placeholder="First name"
            size="md"
            className="w-full m-auto placeholder:text-base text-base"
            classNames={{
              label: "text-sm mb-1",
            }}
            type="text"
            label="First name"
            {...signUpForm.getInputProps("firstName")}
          />
        </div>
        <div>
          <TextInput
            placeholder="Last name"
            size="md"
            className="w-full  m-auto placeholder:text-base text-base"
            classNames={{
              label: "text-sm mb-1",
            }}
            type="text"
            label="Last name"
            {...signUpForm.getInputProps("lastName")}
          />
        </div>
        <div>
          <TextInput
            size="md"
            className="w-full  m-auto placeholder:text-base text-base"
            classNames={{
              label: "text-sm mb-1",
            }}
            placeholder="Email or Username"
            type="email"
            label="Email"
            {...signUpForm.getInputProps("email")}
          />
        </div>
        <div>
          <PasswordInput
            label="Password"
            size="md"
            className="w-full m-auto placeholder:text-base text-base"
            classNames={{
              label: "text-sm mb-1",
            }}
            placeholder="Password"
            {...signUpForm.getInputProps("password")}
          />
        </div>
        <div>
          <PasswordInput
            label="Confirm Password"
            size="md"
            className="w-full m-auto placeholder:text-base text-base"
            classNames={{
              label: "text-sm mb-1",
            }}
            placeholder="Confirm Password"
            {...signUpForm.getInputProps("confirmPassword")}
          />
        </div>

        <Button
          type="submit"
          className=" bg-blue-500 h-12 rounded mt-2 hover:bg"
        >
          Sign Up
        </Button>
      </form>
    </Modal>
  );
};

export default SignUpModal;
