import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";
import { Cloud, Droplets, Eye, Gauge, Thermometer, Wind } from "lucide-react";
import WeatherInfoCard from "./WeatherInfoCard";
import { handleSave } from "../../helper/index.helper";

const CurrentWeather = () => {
  const { weatherState } = useContext(WeatherContext);
  const { location, current } = weatherState.current_weather || {};

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg">
      <button
        type="button"
        onClick={() => handleSave()}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 float-end"
      >
        Save
      </button>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <h1 className="text-3xl font-bold">{location.name}</h1>
          <p className="text-xl">
            {location.region}, {location.country}
          </p>
          <p className="text-sm mt-2">Local Time: {location.localtime}</p>
          <p className="text-sm">
            Lat: {location.lat}, Lon: {location.lon}
          </p>
        </div>

        <div className="p-6 flex flex-wrap items-center justify-between border-b">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={current.condition.icon}
              alt={current.condition.text}
              className="w-16 h-16 mr-4"
            />
            <div>
              <h2 className="text-4xl font-bold">{current.temp_c}°C</h2>
              <p className="text-gray-600">{current.condition.text}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">
              Feels like: {current.feelslike_c}°C
            </p>
            <p className="text-sm text-gray-600">
              Last updated: {current.last_updated}
            </p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <WeatherInfoCard
            icon={<Wind className="w-6 h-6" />}
            title="Wind"
            value={`${current.wind_kph} km/h ${current.wind_dir}`}
          />
          <WeatherInfoCard
            icon={<Droplets className="w-6 h-6" />}
            title="Humidity"
            value={`${current.humidity}%`}
          />
          <WeatherInfoCard
            icon={<Gauge className="w-6 h-6" />}
            title="Pressure"
            value={`${current.pressure_mb} mb`}
          />
          <WeatherInfoCard
            icon={<Cloud className="w-6 h-6" />}
            title="Cloud Cover"
            value={`${current.cloud}%`}
          />
          <WeatherInfoCard
            icon={<Eye className="w-6 h-6" />}
            title="Visibility"
            value={`${current.vis_km} km`}
          />
          <WeatherInfoCard
            icon={<Thermometer className="w-6 h-6" />}
            title="UV Index"
            value={current.uv.toString()}
          />
        </div>

        {/* Additional Information */}
        <div className="p-6 bg-gray-50 text-sm text-gray-600">
          <h3 className="font-semibold mb-2">Additional Information:</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li>Precipitation: {current.precip_mm} mm</li>
            <li>Dew Point: {current.dewpoint_c}°C</li>
            <li>Wind Chill: {current.windchill_c}°C</li>
            <li>Heat Index: {current.heatindex_c}°C</li>
            <li>Gust: {current.gust_kph} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
