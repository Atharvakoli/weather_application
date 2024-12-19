import { Outlet } from "react-router-dom";
import { WeatherContextProvider } from "./context/dataFetchContext";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <>
      <main className="h-full bg-gradient-to-br from-blue-400 to-blue-700 p-4">
        <WeatherContextProvider>
          <div className="mb-2 bg-gray-100">
            <Navbar />
            <Welcome />
          </div>
          <Outlet />
        </WeatherContextProvider>
      </main>
    </>
  );
};

export default App;
