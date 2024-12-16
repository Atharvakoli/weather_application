import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import WeatherApp from "../components/WeatherApp";
import Forecast from "../components/forecast/Forecast";
import History from "../components/history/History";
import Alerts from "../components/alerts/Alerts";
import Marine from "../components/marine/Marine";
import Astronomy from "../components/astoronomy/Astronomy";
import CurrentWeather from "../components/currentWeather/CurrentWeather";
import App from "../App";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<WeatherApp />} />
      <Route path="current-weather" element={<CurrentWeather />} />
      <Route path="forecast" element={<Forecast />} />
      <Route path="history" element={<History />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="marine" element={<Marine />} />
      <Route path="astronomy" element={<Astronomy />} />
    </Route>
  )
);

export default router;
