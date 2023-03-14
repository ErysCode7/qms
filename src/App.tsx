import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Sidebar } from "./components";
import { Dashboard, ErrorPage, Events, Members } from "./pages";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
