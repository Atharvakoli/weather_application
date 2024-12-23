import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";

const Forecastday = () => {
  const { weatherState } = useContext(WeatherContext);
  const { weathers } = weatherState.weathers;
  const forecast =
    Array.isArray(weathers) && weathers.map((data) => data.forecast);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 bg-gradient-to-br from-blue-400 to-purple-500  p-4">
        {forecast &&
          forecast.map((weather, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 text-white"
            >
              <div className="max-w-4xl mx-auto rounded-lg  overflow-hidden ">
                <div className="p-8">
                  <h2 className="text-2xl font-bold  mb-4 ">Hourly Forecast</h2>
                  <div className="max-w-4xl mx-auto  rounded-xl overflow-hidden m-4">
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h2 className="text-2xl font-bold ">
                            {weather.forecastday.date}
                          </h2>
                          <p className="text-sm ">
                            Epoch: {weather.forecastday.date_epoch}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img
                            src={weather.forecastday.day.condition.icon}
                            alt={weather.forecastday.day.condition.text}
                            className="w-16 h-16"
                          />
                          <p className="ml-2 text-lg font-semibold">
                            {weather.forecastday.day.condition.text}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Temperature
                          </h3>
                          <p>
                            Max: {weather.forecastday.day.maxtemp_c}°C /{" "}
                            {weather.forecastday.day.maxtemp_f}
                            °F
                          </p>
                          <p>
                            Min: {weather.forecastday.day.mintemp_c}°C /{" "}
                            {weather.forecastday.day.mintemp_f}
                            °F
                          </p>
                          <p>
                            Avg: {weather.forecastday.day.avgtemp_c}°C /{" "}
                            {weather.forecastday.day.avgtemp_f}
                            °F
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Wind & Precipitation
                          </h3>
                          <p>
                            Max Wind: {weather.forecastday.day.maxwind_kph} km/h
                            / {weather.forecastday.day.maxwind_mph} mph
                          </p>
                          <p>
                            Precipitation:{" "}
                            {weather.forecastday.day.totalprecip_mm} mm /{" "}
                            {weather.forecastday.day.totalprecip_in} in
                          </p>
                          <p>Snow: {weather.forecastday.day.totalsnow_cm} cm</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Visibility & Humidity
                          </h3>
                          <p>
                            Visibility: {weather.forecastday.day.avgvis_km} km /{" "}
                            {weather.forecastday.day.avgvis_miles} miles
                          </p>
                          <p>
                            Humidity: {weather.forecastday.day.avghumidity}%
                          </p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Precipitation Chance
                          </h3>
                          <p>
                            Rain: {weather.forecastday.day.daily_chance_of_rain}
                            %
                          </p>
                          <p>
                            Snow: {weather.forecastday.day.daily_chance_of_snow}
                            %
                          </p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Additional Info
                        </h3>
                        <p>UV Index: {weather.forecastday.day.uv}</p>
                        <p>
                          Condition Code:{" "}
                          {weather.forecastday.day.condition.code}
                        </p>
                      </div>
                    </div>
                    <div className="flex overflow-x-auto pb-4">
                      {weather.forecastday.hour.map((hour, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-20 text-center mr-4"
                        >
                          <p>{hour.time.replace("T", " ".split(" ")[1])}</p>
                          <p className="text-2xl my-2">{hour.condition.code}</p>
                          <p className="font-semibold">
                            {hour.temp_c.toFixed(1)}°C
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Forecastday;
