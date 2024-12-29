import { useContext, useState } from "react";
import { Sun, Cloud, Droplets, Wind } from "lucide-react";
import { WeatherContext } from "../../context/dataFetchContext";

const Marine = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const { weatherState } = useContext(WeatherContext);

  let forecastday = weatherState.weather_marine.forecast.forecastday;

  if (!forecastday) {
    return <p>Loading weather data...</p>;
  }
  const selectedForecast = forecastday[selectedDay];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">
            {weatherState.weather_marine.location.name},{" "}
            {weatherState.weather_marine.location.region}
          </h1>
          <p className="text-gray-600 mb-8">
            {weatherState.weather_marine.location.country}
          </p>
          <div className="flex space-x-4 mb-8">
            {Array.isArray(forecastday) &&
              forecastday.map((day, index) => (
                <button
                  key={day.date}
                  className={`px-4 py-2 rounded-full ${
                    selectedDay === index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedDay(index)}
                >
                  {day.date}
                </button>
              ))}
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Today&apos;s Weather
              </h2>
              <div className="flex items-center mb-4">
                <img
                  src={selectedForecast.day.condition.icon}
                  alt="Weather icon"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="text-4xl font-bold">
                    {selectedForecast.day.avgtemp_c}°C
                  </p>
                  <p className="text-gray-600">
                    {selectedForecast.day.condition.text}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Sun className="w-6 h-6 mr-2 text-yellow-500" />
                  <div>
                    <p className="font-semibold">High</p>
                    <p>{selectedForecast.day.maxtemp_c}°C</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Cloud className="w-6 h-6 mr-2 text-gray-500" />
                  <div>
                    <p className="font-semibold">Low</p>
                    <p>{selectedForecast.day.mintemp_c}°C</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Droplets className="w-6 h-6 mr-2 text-blue-500" />
                  <div>
                    <p className="font-semibold">Humidity</p>
                    <p>{selectedForecast.day.avghumidity}%</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Wind className="w-6 h-6 mr-2 text-green-500" />
                  <div>
                    <p className="font-semibold">Wind</p>
                    <p>{selectedForecast.day.maxwind_kph} km/h</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Hourly Forecast</h2>
              <div className="space-y-2 h-64 overflow-y-auto">
                {selectedForecast.hour &&
                  Array.isArray(selectedForecast.hour) &&
                  selectedForecast.hour.map((hour, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-100 p-2 rounded"
                    >
                      <p>{hour.time.split(" ")[1]}</p>
                      <div className="flex items-center">
                        <img
                          src={hour.condition.icon}
                          alt="Weather icon"
                          className="w-8 h-8 mr-2"
                        />
                        <p>{hour.temp_c}°C</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marine;
