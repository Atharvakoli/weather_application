import { useNavigate } from "react-router-dom";
import { setNavigation } from "../helper/index.helper";
import { WeatherContext } from "../context/dataFetchContext";
import { useContext, useEffect } from "react";

const Forecast = () => {
  const { weatherState, fetchDataForType } = useContext(WeatherContext);
  const { forecast } = weatherState.weather_forecast;

  const navigate = useNavigate();

  useEffect(() => {
    fetchDataForType("weather_forecast", { location: "virar", days: 5 });
  }, [fetchDataForType]);

  return (
    <div
      onClick={() => setNavigation("forecast", navigate)}
      className="bg-gray-100 p-4 rounded-lg cursor-pointer "
    >
      <h2 className="text-xl font-semibold mb-2">Forecast</h2>
      <div className="flex justify-start gap-2 ">
        {forecast.forecastday.map((day, index) => (
          <div key={index} className="text-center">
            <p className="font-medium">{day.day.condition.text}</p>
            <img src={day.day.condition.icon} />
            <p>{day.day.maxtemp_c}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
