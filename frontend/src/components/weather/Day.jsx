import { Sun, Cloud, Wind, Eye, Beaker } from "lucide-react";
import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";

const Day = () => {
  const { weatherState } = useContext(WeatherContext);
  const { weathers } = weatherState.weathers;
  const forecast =
    Array.isArray(weathers) && weathers.map((data) => data.forecast);
  const day = forecast.map((data) => data.forecastday.day);
  return (
    <div className="grid grid-cols-4 gap-4 bg-gradient-to-br from-blue-400 to-purple-500 p-4">
      {day.map((data, index) => (
        <div
          key={index}
          className="max-w-md mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6 text-white">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-3xl font-bold">{data.condition.text}</h2>
                <p className="text-xl">
                  {data.avgtemp_c}°C / {data.avgtemp_f}°F
                </p>
              </div>
              <img
                src={data.condition.icon}
                alt={data.condition.text}
                className="w-16 h-16"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <Sun className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-sm">
                    High: {data.maxtemp_c}°C / {data.maxtemp_f}°F
                  </p>
                  <p className="text-sm">
                    Low: {data.mintemp_c}°C / {data.mintemp_f}°F
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Wind className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-sm">Wind: {data.maxwind_kph} km/h</p>
                  <p className="text-sm">{data.maxwind_mph} mph</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <Cloud className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-sm">
                    Precipitation: {data.totalprecip_mm} mm
                  </p>
                  <p className="text-sm">{data.totalprecip_in} in</p>
                </div>
              </div>
              <div className="flex items-center">
                <Eye className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-sm">Visibility: {data.avgvis_km} km</p>
                  <p className="text-sm">{data.avgvis_miles} miles</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Beaker className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-sm">Humidity: {data.avghumidity}%</p>
                  <p className="text-sm">UV Index: {data.uv}</p>
                </div>
              </div>
              <div>
                <p className="text-sm">
                  Chance of Rain: {data.daily_chance_of_rain}%
                </p>
                <p className="text-sm">
                  Chance of Snow: {data.daily_chance_of_snow}%
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Day;
