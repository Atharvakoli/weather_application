import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";
const Forecast = () => {
  const { weatherState } = useContext(WeatherContext);
  const { forecast } = weatherState.weather_forecast;
  // console.log(forecast);

  const forecastday = forecast.forecastday.map((day) => day);

  return (
    <>
      <div className="mx-auto h-full mb-10 bg-white rounded-lg shadow-lg overflow-hidden">
        {forecastday.map((today, index) => (
          <div key={index} className="mx-auto p-4 bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4">
                Weather Forecast for {today.date}
              </h2>
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img
                    src={today.day.condition.icon}
                    alt={today.day.condition.text}
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <p className="text-4xl font-bold">
                      {today.day.avgtemp_c}°C
                    </p>
                    <p className="text-gray-600">{today.day.condition.text}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">High</p>
                    <p className="font-semibold">{today.day.maxtemp_c}°C</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Low</p>
                    <p className="font-semibold">{today.day.mintemp_c}°C</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Wind</p>
                    <p className="font-semibold">
                      {today.day.maxwind_kph} km/h
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Rain Chance</p>
                    <p className="font-semibold">
                      {today.day.daily_chance_of_rain}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Humidity</p>
                  <p className="font-semibold">{today.day.avghumidity}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Precipitation</p>
                  <p className="font-semibold">{today.day.totalprecip_mm} mm</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">UV Index</p>
                  <p className="font-semibold">{today.day.uv}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sunrise / Sunset</p>
                  <p className="font-semibold">
                    {today.astro.sunrise} / {today.astro.sunset}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Hourly Forecast</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-2 px-4">Time</th>
                      <th className="py-2 px-4">Temp</th>
                      <th className="py-2 px-4">Condition</th>
                      <th className="py-2 px-4">Wind</th>
                      <th className="py-2 px-4">Humidity</th>
                      <th className="py-2 px-4">Rain Chance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {today.hour.map((hour, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="py-2 px-4">{hour.time.split(" ")[1]}</td>
                        <td className="py-2 px-4">{hour.temp_c}°C</td>
                        <td className="py-2 px-4 flex items-center">
                          <img
                            src={hour.condition.icon}
                            alt={hour.condition.text}
                            className="w-8 h-8 mr-2"
                          />
                          {hour.condition.text}
                        </td>
                        <td className="py-2 px-4">{hour.wind_kph} km/h</td>
                        <td className="py-2 px-4">{hour.humidity}%</td>
                        <td className="py-2 px-4">{hour.chance_of_rain}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Forecast;
