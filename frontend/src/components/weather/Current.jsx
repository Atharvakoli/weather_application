import { Wind, Droplets, Eye, Thermometer } from "lucide-react";
const Current = () => {
  const current = {
    last_updated_epoch: 1734670800,
    last_updated: "2024-12-20 10:30",
    temp_c: 24.9,
    temp_f: 76.8,
    is_day: 1,
    condition: {
      text: "Sunny",
      icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      code: 1000,
    },
    wind_mph: 2.9,
    wind_kph: 4.7,
    wind_degree: 10,
    wind_dir: "N",
    pressure_mb: 1013,
    pressure_in: 29.92,
    precip_mm: 0,
    precip_in: 0,
    humidity: 44,
    cloud: 0,
    feelslike_c: 25.5,
    feelslike_f: 77.9,
    windchill_c: 24.9,
    windchill_f: 76.8,
    heatindex_c: 25.5,
    heatindex_f: 77.9,
    dewpoint_c: 11.7,
    dewpoint_f: 53,
    vis_km: 10,
    vis_miles: 6,
    uv: 3.5,
    gust_mph: 3.4,
    gust_kph: 5.5,
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Current Weather</h2>
          <p className="text-sm">{current.last_updated}</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center justify-center bg-white bg-opacity-20 rounded-lg p-4">
              <img
                src={current.condition.icon}
                alt={current.condition.text}
                className="w-16 h-16 mr-4"
              />
              <div>
                <p className="text-4xl font-bold">{current.temp_c}°C</p>
                <p className="text-xl">{current.condition.text}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 grid grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 rounded-lg p-3 flex flex-col items-center">
              <Thermometer className="w-6 h-6 mb-2" />
              <p className="text-sm">Feels Like</p>
              <p className="font-bold">{current.feelslike_c}°C</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3 flex flex-col items-center">
              <Wind className="w-6 h-6 mb-2" />
              <p className="text-sm">Wind</p>
              <p className="font-bold">{current.wind_kph} km/h</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3 flex flex-col items-center">
              <Droplets className="w-6 h-6 mb-2" />
              <p className="text-sm">Humidity</p>
              <p className="font-bold">{current.humidity}%</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-3 flex flex-col items-center">
              <Eye className="w-6 h-6 mb-2" />
              <p className="text-sm">Visibility</p>
              <p className="font-bold">{current.vis_km} km</p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <p className="text-sm">Pressure</p>
            <p className="font-bold">{current.pressure_mb} mb</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <p className="text-sm">Precipitation</p>
            <p className="font-bold">{current.precip_mm} mm</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <p className="text-sm">UV Index</p>
            <p className="font-bold">{current.uv}</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <p className="text-sm">Cloud Cover</p>
            <p className="font-bold">{current.cloud}%</p>
          </div>
        </div>

        <div className="mt-6 text-sm text-center">
          <p>
            Wind Direction: {current.wind_dir} | Gust: {current.gust_kph} km/h
          </p>
          <p>
            Heat Index: {current.heatindex_c}°C | Windchill:{" "}
            {current.windchill_c}
            °C
          </p>
        </div>
      </div>
    </div>
  );
};

export default Current;
