import { Sun, Moon, Wind, Droplets, Thermometer } from "lucide-react";
import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";
const History = () => {
  const { weatherState } = useContext(WeatherContext);
  const { location, forecast } = weatherState.weather_history;

  return (
    <div className="min-h-screen bg-gray-100 p-4 rounded-lg cursor-pointer">
      <div className=" bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <h1 className="text-4xl font-bold mb-2">{location.name}</h1>
            <p className="text-xl">
              {location.region}, {location.country}
            </p>
            <p className="text-lg mt-2">{location.localtime}</p>
          </div>
          {forecast.forecastday.map((currentDay, index) => (
            <div key={index} className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-semibold">
                    {currentDay.day.condition.text}
                  </h2>
                  <p className="text-5xl font-bold mt-2">
                    {currentDay.day.avgtemp_c}°C
                  </p>
                </div>
                <img
                  src={currentDay.day.condition.icon}
                  alt={currentDay.day.condition.text}
                  className="w-24 h-24"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Thermometer className="w-6 h-6 mr-2 text-red-500" />
                  <span>High: {currentDay.day.maxtemp_c}°C</span>
                </div>
                <div className="flex items-center">
                  <Thermometer className="w-6 h-6 mr-2 text-blue-500" />
                  <span>Low: {currentDay.day.mintemp_c}°C</span>
                </div>
                <div className="flex items-center">
                  <Wind className="w-6 h-6 mr-2 text-gray-500" />
                  <span>Wind: {currentDay.day.maxwind_kph} km/h</span>
                </div>
                <div className="flex items-center">
                  <Droplets className="w-6 h-6 mr-2 text-blue-500" />
                  <span>Humidity: {currentDay.day.avghumidity}%</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-xl font-semibold mb-4">Hourly Forecast</h3>
                <div className="flex overflow-x-auto space-x-4 pb-4">
                  {currentDay.hour.map((hour, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center min-w-[100px]"
                    >
                      <span className="text-sm">{hour.time.split(" ")[1]}</span>
                      <img
                        src={hour.condition.icon}
                        alt={hour.condition.text}
                        className="w-12 h-12 my-2"
                      />
                      <span className="font-semibold">{hour.temp_c}°C</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="text-xl font-semibold mb-4">
                  Astronomical Data
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Sun className="w-6 h-6 mr-2 text-yellow-500" />
                    <span>Sunrise: {currentDay.astro.sunrise}</span>
                  </div>
                  <div className="flex items-center">
                    <Moon className="w-6 h-6 mr-2 text-gray-400" />
                    <span>Sunset: {currentDay.astro.sunset}</span>
                  </div>
                  <div className="flex items-center">
                    <Moon className="w-6 h-6 mr-2 text-gray-400" />
                    <span>Moonrise: {currentDay.astro.moonrise}</span>
                  </div>
                  <div className="flex items-center">
                    <Moon className="w-6 h-6 mr-2 text-gray-400" />
                    <span>Moonset: {currentDay.astro.moonset}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
