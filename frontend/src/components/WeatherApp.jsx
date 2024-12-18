import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import { setNavigation } from "../helper/index.helper";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { WeatherContext } from "../context/dataFetchContext";

const WeatherApp = () => {
  const navigate = useNavigate();
  const { weatherState, fetchDataForType } = useContext(WeatherContext);
  const { error, loading } = weatherState;

  useEffect(() => {
    fetchDataForType("weather_history", {
      location: "virar",
      dt: "2024-01-01",
    });
  }, [fetchDataForType]);

  let { forecast } = weatherState.weather_history;
  let days = forecast.forecastday.length;
  let total = 0;
  forecast.forecastday.forEach((day) => (total += day.day.maxtemp_c));
  let avg = total / days;

  useEffect(() => {
    fetchDataForType("weather_alerts", {
      location: "virar",
    });
  }, [fetchDataForType]);

  const { alerts } = weatherState.weather_alerts;

  useEffect(() => {
    fetchDataForType("weather_marine", {
      location: "virar",
      days: 2,
    });
  }, [fetchDataForType]);

  const marine = weatherState.weather_marine;
  const { forecastday } = marine.forecast;
  return (
    <>
      <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {error && <p>Error: {error}</p>}
        {loading && <p>Loading data...</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <CurrentWeather />
          <Forecast />
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
            {alerts.alert.length > 1 ? (
              alerts.map((data, index) => (
                <>
                  <h2 key={index} className="text-2xl font-bold">
                    {data.event}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold bg-gray-500 text-white`}
                  >
                    {data.urgency}
                  </span>
                </>
              ))
            ) : (
              <p>No current weather alerts</p>
            )}
          </div>
          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("marine", navigate)}
          >
            <h3 className="text-lg font-semibold mb-2">Marine</h3>
            <div className="flex border">
              <p>Tide time: tide_time</p>
              <p>Tide Height: tide_height_mt</p>
              <p>Tide_Type: tide_type</p>
            </div>
          </div>

          <div
            className="bg-gray-100 p-4 rounded-lg cursor-pointer"
            onClick={() => setNavigation("astronomy", navigate)}
          >
            <h3 className="text-lg font-semibold mb-2">Astronomy</h3>
            <p>Sunrise: 05:30 AM</p>
            <p>Sunset: 08:45 PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
