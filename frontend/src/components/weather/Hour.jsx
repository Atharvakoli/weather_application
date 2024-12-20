const Hour = () => {
  const data = [
    {
      time_epoch: 1734633000,
      time: "2024-12-20 00:00",
      temp_c: 21,
      temp_f: 69.8,
      is_day: 0,
      condition: {
        text: "Clear ",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        code: 1000,
      },
      wind_mph: 2.9,
      wind_kph: 4.7,
      wind_degree: 43,
      wind_dir: "NE",
      pressure_mb: 1012,
      pressure_in: 29.87,
      precip_mm: 0,
      precip_in: 0,
      snow_cm: 0,
      humidity: 68,
      cloud: 0,
      feelslike_c: 21,
      feelslike_f: 69.8,
      windchill_c: 21,
      windchill_f: 69.8,
      heatindex_c: 24.4,
      heatindex_f: 75.9,
      dewpoint_c: 15,
      dewpoint_f: 59,
      will_it_rain: 0,
      chance_of_rain: 0,
      will_it_snow: 0,
      chance_of_snow: 0,
      vis_km: 10,
      vis_miles: 6,
      gust_mph: 5.5,
      gust_kph: 8.9,
      uv: 0,
    },
    {
      time_epoch: 1734636600,
      time: "2024-12-20 01:00",
      temp_c: 20.8,
      temp_f: 69.4,
      is_day: 0,
      condition: {
        text: "Clear ",
        icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
        code: 1000,
      },
      wind_mph: 3.1,
      wind_kph: 5,
      wind_degree: 31,
      wind_dir: "NNE",
      pressure_mb: 1011,
      pressure_in: 29.86,
      precip_mm: 0,
      precip_in: 0,
      snow_cm: 0,
      humidity: 67,
      cloud: 0,
      feelslike_c: 20.8,
      feelslike_f: 69.4,
      windchill_c: 20.8,
      windchill_f: 69.4,
      heatindex_c: 20.8,
      heatindex_f: 69.4,
      dewpoint_c: 14.5,
      dewpoint_f: 58.1,
      will_it_rain: 0,
      chance_of_rain: 0,
      will_it_snow: 0,
      chance_of_snow: 0,
      vis_km: 10,
      vis_miles: 6,
      gust_mph: 6,
      gust_kph: 9.7,
      uv: 0,
    },
  ];
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center gap-2 p-4">
      {data.map((data, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl p-6 max-w-2xl w-full"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Weather Report</h1>
            <p className="text-gray-600">{data.time}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2 flex items-center justify-center bg-gray-100 rounded-lg p-4">
              <img
                src={data.condition.icon}
                alt={data.condition.text}
                className="w-16 h-16 mr-4"
              />
              <div>
                <p className="text-4xl font-bold text-gray-800">
                  {data.temp_c}°C / {data.temp_f}°F
                </p>
                <p className="text-xl text-gray-600">{data.condition.text}</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">Wind</h2>
              </div>
              <div className="text-gray-600">
                <p>
                  {data.wind_kph} km/h / {data.wind_mph} mph
                </p>
                <p>
                  Direction: {data.wind_dir} ({data.wind_degree}°)
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  Pressure
                </h2>
              </div>
              <div className="text-gray-600">
                <p>{data.pressure_mb} mb</p>
                <p>{data.pressure_in} in</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  Precipitation
                </h2>
              </div>
              <div className="text-gray-600">
                <p>{data.precip_mm} mm</p>
                <p>{data.precip_in} in</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  Humidity & Cloud
                </h2>
              </div>
              <div className="text-gray-600">
                <p>Humidity: {data.humidity}%</p>
                <p>Cloud: {data.cloud}%</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 11V3a1 1 0 00-1-1v8a1 1 0 001 1zm3 .75V4a1 1 0 01-1-1v8a1 1 0 001 1z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  Feels Like
                </h2>
              </div>
              <div className="text-gray-600">
                <p>
                  {data.feelslike_c}°C / {data.feelslike_f}°F
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  Heat Index
                </h2>
              </div>
              <div className="text-gray-600">
                <p>
                  {data.heatindex_c}°C / {data.heatindex_f}°F
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  Dew Point
                </h2>
              </div>
              <div className="text-gray-600">
                <p>
                  {data.dewpoint_c}°C / {data.dewpoint_f}°F
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  Visibility
                </h2>
              </div>
              <div className="text-gray-600">
                <p>
                  {data.vis_km} km / {data.vis_miles} miles
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">Gust</h2>
              </div>
              <div className="text-gray-600">
                <p>
                  {data.gust_kph} km/h / {data.gust_mph} mph
                </p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  UV Index
                </h2>
              </div>
              <div className="text-gray-600">
                <p>{data.uv}</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-500 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                <h2 className="text-lg font-semibold text-gray-800">
                  Precipitation Chance
                </h2>
              </div>
              <div className="text-gray-600">
                <p>Rain: {data.chance_of_rain}%</p>
                <p>Snow: {data.chance_of_snow}%</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hour;
