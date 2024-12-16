import { Outlet } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <main className="h-full bg-gradient-to-br from-blue-400 to-blue-700 p-4">
        <Home />
        <Outlet />
      </main>
    </>
  );
};

export default App;
