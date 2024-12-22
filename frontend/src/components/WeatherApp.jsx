import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { setNavigation } from "../helper/index.helper";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useMemo } from "react";
import { WeatherContext } from "../context/dataFetchContext";

const WeatherApp = () => {
  const navigate = useNavigate();
  const { weatherState, fetchDataForType } = useContext(WeatherContext);
  const { error, loading } = weatherState;
  const name = weatherState.search_weather[0]?.name.toLowerCase();

  useEffect(() => {
    const fetchWeatherData = async () => {
      await Promise.all([
        fetchDataForType("weather_history", {
          location: name,
          dt: "2024-01-01",
        }),
        fetchDataForType("weather_alerts", { location: name }),
        fetchDataForType("weather_marine", { location: name, days: 5 }),
        fetchDataForType("weather_astronomy", {
          location: name,
          dt: "2024-01-01",
        }),
      ]);
    };

    fetchWeatherData();
  }, [name, fetchDataForType]);

  let { forecast } = weatherState.weather_history;
  let days = forecast.forecastday.length;
  let avg = useMemo(() => {
    if (!forecast || forecast.forecastday.length === 0) return 0;
    const total = forecast.forecastday.reduce(
      (sum, day) => sum + day.day.maxtemp_c,
      0
    );
    return total / forecast.forecastday.length;
  }, [forecast]);

  const { alerts } = weatherState.weather_alerts;
  const marine = weatherState.weather_marine;
  const { forecastday } = marine.forecast;
  const { astronomy } = weatherState.weather_astronomy;

  return (
    <>
      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-2">
        {error && (
          <p className="text-red-500 p-2">
            {error && `${name} Weather NOT FOUND`}
          </p>
        )}
        {loading && (
          <>
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-cyan-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Searching...
            </span>
          </>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <CurrentWeather name={name} />
          <Forecast name={name} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("history", navigate)}
          >
            <h3 className="text-lg font-semibold mb-2">History</h3>
            <p>
              Past {days} days average: {avg}°C
            </p>
          </div>
          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("alerts", navigate)}
          >
            <h3 className="text-lg font-semibold mb-2">Alerts</h3>
            {alerts && alerts.alert.length > 1 ? (
              alerts.alert.map((data, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold">{data.event}</h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold bg-gray-500 text-white`}
                  >
                    {data.urgency}
                  </span>
                </div>
              ))
            ) : (
              <p>No current weather alerts</p>
            )}
          </div>
          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("marine", navigate)}
          >
            {forecastday.map((day, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-2">Marine</h3>
                <div className="flex ">
                  <p>{day.maxtemp_c}</p>
                  <p>{day.day.condition.text}</p>
                  <img src={day.day.condition.icon} />
                </div>
              </div>
            ))}
          </div>

          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("astronomy", navigate)}
          >
            <h3 className="text-lg font-semibold mb-2">Astronomy</h3>
            <p>Sunrise: {astronomy.astro.sunrise}</p>
            <p>Sunset: {astronomy.astro.sunset}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
