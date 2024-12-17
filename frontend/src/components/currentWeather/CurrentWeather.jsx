const CurrentWeather = () => {
  const weatherData = {
    location: {
      name: "Virar",
      region: "Maharashtra",
      country: "India",
      lat: 19.4667,
      lon: 72.8,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1734353584,
      localtime: "2024-12-16 18:23",
    },
    current: {
      last_updated_epoch: 1734353100,
      last_updated: "2024-12-16 18:15",
      temp_c: 23.5,
      temp_f: 74.3,
      is_day: 0,
      condition: {
        text: "Clear",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        code: 1000,
      },
      wind_mph: 9.2,
      wind_kph: 14.8,
      wind_degree: 330,
      wind_dir: "NNW",
      pressure_mb: 1012,
      pressure_in: 29.87,
      precip_mm: 0,
      precip_in: 0,
      humidity: 53,
      cloud: 0,
      feelslike_c: 25,
      feelslike_f: 77,
      windchill_c: 23.5,
      windchill_f: 74.3,
      heatindex_c: 25,
      heatindex_f: 77,
      dewpoint_c: 13.3,
      dewpoint_f: 56,
      vis_km: 10,
      vis_miles: 6,
      uv: 0,
      gust_mph: 18.1,
      gust_kph: 29.2,
    },
  };
  return (
    <div className="mx-auto mb-10 h-screen bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="rounded-lg shadow-xl p-6 w-full max-w-md">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold">
                {weatherData.location.name}
              </h1>
              <p>{`${weatherData.location.region}, ${weatherData.location.country}`}</p>
            </div>
            <div className="text-right">
              <p className="text-sm ">{weatherData.location.localtime}</p>
              <p className="text-xs">
                Last updated: {weatherData.current.last_updated}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center my-8">
            <img
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
              className="w-24 h-24 mr-4"
            />
            <div className="text-center">
              <h2 className="text-6xl font-bold">
                {weatherData.current.temp_c}°C
              </h2>
              <p className="text-xl">{weatherData.current.condition.text}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className=" rounded-lg p-3">
              <p className="text-sm">Feels Like</p>
              <p className="text-xl font-semibold">
                {weatherData.current.feelslike_c}°C
              </p>
            </div>
            <div className="brounded-lg p-3">
              <p className="text-sm">Humidity</p>
              <p className="text-xl font-semibold">
                {weatherData.current.humidity}%
              </p>
            </div>
            <div className="rounded-lg p-3">
              <p className="text-sm">Wind</p>
              <p className="text-xl font-semibold">
                {weatherData.current.wind_kph} km/h
              </p>
            </div>
            <div className="rounded-lg p-3">
              <p className="text-sm">Pressure</p>
              <p className="text-xl font-semibold">
                {weatherData.current.pressure_mb} mb
              </p>
            </div>
          </div>

          <div className="text-center text-sm">
            <p>
              UV Index: {weatherData.current.uv} | Visibility:{" "}
              {weatherData.current.vis_km} km
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
