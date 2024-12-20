const Location = () => {
  const weatherData = {
    location: {
      name: "Virar",
      region: "Maharashtra",
      country: "India",
      lat: 19.4667,
      lon: 72.8,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1734671645,
      localtime: "2024-12-20 10:44",
    },
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-xl p-6 max-w-md w-full text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">{weatherData.location.name}</h1>
            <p>
              {weatherData.location.region}, {weatherData.location.country}
            </p>
          </div>
          <svg
            className="w-12 h-12 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="">
            <span className="font-semibold">Local Time:</span>{" "}
            {weatherData.location.localtime}
          </p>
          <p>
            <span className="font-semibold">Timezone:</span>{" "}
            {weatherData.location.tz_id}
          </p>
          <p>
            <span className="font-semibold">Coordinates:</span>{" "}
            {weatherData.location.lat}, {weatherData.location.lon}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
