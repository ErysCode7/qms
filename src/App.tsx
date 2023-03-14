import { Route, Routes } from "react-router-dom";
import { Dashboard, ErrorPage, Events, Members } from "./pages";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
