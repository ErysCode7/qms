import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="h-screen w-full flex flex-col gap-5 items-center justify-center">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        404, Page not found!
      </h1>
      <Link to="/">
        <button className="bg-blue-500 text-white p-4 rounded-full active:scale-[98%]">
          Please redirect to homepage!
        </button>
      </Link>
    </main>
  );
};

export default ErrorPage;
