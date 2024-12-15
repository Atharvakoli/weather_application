import React from "react";

const CurrentWeather = () => {
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold">25°C</p>
            <p className="text-gray-600">Sunny</p>
          </div>
          <div className="text-right">
            <p>Humidity: 60%</p>
            <p>Wind: 5 km/h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
