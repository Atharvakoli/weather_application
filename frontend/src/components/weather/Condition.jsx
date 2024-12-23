import { Cloud } from "lucide-react";
import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";

const Condition = () => {
  const { weatherState } = useContext(WeatherContext);
  const { weathers } = weatherState.weathers;

  const currentCondition =
    Array.isArray(weathers) &&
    weathers.map((weather) => weather.current.condition);
  let forecastday =
    Array.isArray(weathers) &&
    weathers.map((weather) => weather.forecast.forecastday);
  const dayCondition =
    forecastday && forecastday.map((data) => data.day.condition);

  let hourCondition = [];
  if (forecastday && Array.isArray(forecastday)) {
    for (const data of forecastday) {
      for (const hour of data.hour) {
        hourCondition.push(hour.condition);
      }
    }
  }
  console.log(currentCondition);

  return (
    <div className="flex flex-col gap-5 bg-gradient-to-br from-blue-400 to-purple-500 p-4">
      <h1 className="bg-green-400 text-blue-700">Current Condition</h1>
      <div className="grid grid-cols-3 gap-4">
        {currentCondition &&
          currentCondition.map((condition, index) => (
            <div key={index} className="p-4">
              <div className="sm:w-96 mx-auto p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg text-white">
                <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 max-w-sm">
                  <div className="relative w-16 h-16">
                    <Cloud
                      src={condition.icon}
                      alt={condition.text}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">
                      {condition.text}
                    </span>
                    <span className="text-sm text-gray-500">
                      Condition Code: {condition.code}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h1 className="bg-green-400 text-blue-700">Day Condition</h1>
      <div className="grid grid-cols-3 gap-4">
        {dayCondition &&
          dayCondition.map((condition, index) => (
            <div key={index} className="p-4">
              <div className="sm:w-96 mx-auto p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg text-white">
                <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 max-w-sm">
                  <div className="relative w-16 h-16">
                    <Cloud
                      src={condition.icon}
                      alt={condition.text}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">
                      {condition.text}
                    </span>
                    <span className="text-sm text-gray-500">
                      Condition Code: {condition.code}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h1 className="bg-green-400 text-blue-700">Hour Condition</h1>
      <div className="grid grid-cols-3 gap-4">
        {hourCondition &&
          hourCondition.map((condition, index) => (
            <div key={index} className="p-4">
              <div className="sm:w-96 mx-auto p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg text-white">
                <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 max-w-sm">
                  <div className="relative w-16 h-16">
                    <Cloud
                      src={condition.icon}
                      alt={condition.text}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">
                      {condition.text}
                    </span>
                    <span className="text-sm text-gray-500">
                      Condition Code: {condition.code}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Condition;
