import Logo from "../../assets/rtu-favicon.png";
import Login from "../log-in/log-in";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col lg:flex-row items-center justify-between lg:gap-10">
      <div className="flex-1">
        <img
          src={Logo}
          alt="Logo"
          className="w-full h-[400px] lg:w-full lg:h-[80vh] object-contain"
        />
      </div>
      <div className="flex-1 w-4/5 m-auto h-full flex items-center justify-center">
        <Login />
      </div>
    </div>
  );
};

export default HomePage;
