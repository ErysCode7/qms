import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components";
import { useAuthProvider } from "./components/global/auth-provider";
import {
  Dashboard,
  ErrorPage,
  Events,
  HomePage,
  Login,
  Members,
} from "./pages";

type Props = {};

const App = (props: Props) => {
  const { currentUser } = useAuthProvider();

  if (!currentUser) {
    return <HomePage />;
  }

  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
