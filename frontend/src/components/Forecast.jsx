import React from "react";

const Forecast = () => {
  const forecastData = [
    { day: "Mon", temp: "24°C", icon: "☀️" },
    { day: "Tue", temp: "22°C", icon: "🌤️" },
    { day: "Wed", temp: "20°C", icon: "🌧️" },
    { day: "Thu", temp: "23°C", icon: "⛅" },
    { day: "Fri", temp: "25°C", icon: "☀️" },
  ];
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">5-Day Forecast</h2>
        <div className="flex justify-between">
          {forecastData.map((day, index) => (
            <div key={index} className="text-center">
              <p className="font-medium">{day.day}</p>
              <p className="text-2xl">{day.icon}</p>
              <p>{day.temp}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Forecast;
