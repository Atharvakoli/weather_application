import { useNavigate } from "react-router-dom";
import { getWeatherDescription, setNavigation } from "../helper/index.helper";
import { useContext, useEffect } from "react";
import { WeatherContext } from "../context/dataFetchContext";

const CurrentWeather = ({ name }) => {
  const { weatherState, fetchDataForType } = useContext(WeatherContext);
  const { current_weather } = weatherState;
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataForType("current_weather", { location: name });
  }, [name, fetchDataForType]);

  const { temp_c, wind_kph, humidity } = current_weather?.current || {};

  return (
    <>
      <div
        onClick={() => setNavigation("current-weather", navigate)}
        className="bg-gray-100 p-4 rounded-lg cursor-pointer "
      >
        <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">{temp_c}°C</p>
            <p className="text-gray-600">{getWeatherDescription(temp_c)}</p>
          </div>
          <div className="text-right">
            <p>Humidity: {humidity}%</p>
            <p>Wind: {wind_kph} km/h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
