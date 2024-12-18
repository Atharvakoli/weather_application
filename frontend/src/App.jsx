import { Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import { WeatherContextProvider } from "./context/dataFetchContext";

const App = () => {
  return (
    <>
      <main className="h-full bg-gradient-to-br from-blue-400 to-blue-700 p-4">
        <WeatherContextProvider>
          <Home />
          <Outlet />
        </WeatherContextProvider>
      </main>
    </>
  );
};

export default App;
