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
import Admin from "../components/admin/Admin";
import { Auth } from "../auth/Auth";
import Location from "../components/weather/Location";
import Current from "../components/weather/Current";
import Condition from "../components/weather/Condition";
import Astro from "../components/weather/Astro";
import Hour from "../components/weather/Hour";
import Day from "../components/weather/Day";
import Forecastday from "../components/weather/Forecastday";
import Forecasts from "../components/weather/Forcast";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<WeatherApp />} />

        <Route path="auth" element={<Auth />} />

        <Route path="admin" element={<Admin />}>
          <Route index element={<Location />} />
          <Route path="current" element={<Current />} />
          <Route path="forecast" element={<Forecasts />} />
          <Route path="forecastday" element={<Forecastday />} />
          <Route path="day" element={<Day />} />
          <Route path="hour" element={<Hour />} />
          <Route path="astro" element={<Astro />} />
          <Route path="condition" element={<Condition />} />
        </Route>

        <Route path="current-weather" element={<CurrentWeather />} />
        <Route path="forecast" element={<Forecast />} />
        <Route path="history" element={<History />} />
        <Route path="alerts" element={<Alerts />} />
        <Route path="marine" element={<Marine />} />
        <Route path="astronomy" element={<Astronomy />} />
      </Route>
      ;
    </>
  )
);

export default router;
