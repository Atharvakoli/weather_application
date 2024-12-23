import { Sun, Moon, Sunrise, Sunset, MoonIcon } from "lucide-react";
import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";
const Astro = () => {
  const { weatherState } = useContext(WeatherContext);
  const { weathers } = weatherState.weathers;
  let forecastday =
    Array.isArray(weathers) &&
    weathers.map((weather) => weather.forecast.forecastday);

  return (
    <div className="grid grid-cols-3 gap-4 bg-gradient-to-br from-blue-400 to-purple-500 p-4">
      {forecastday &&
        forecastday.map((data, index) => (
          <div key={index} className="p-4">
            <div className="sm:w-96 mx-auto p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg text-white">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Astronomical Data
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
                    <Sun className="mr-2" /> Sun Data
                  </h3>
                  <div className="space-y-2">
                    <p className="text-white flex items-center">
                      <Sunrise className="mr-2 text-yellow-400" /> Sunrise:{" "}
                      {data.astro.sunrise}
                    </p>
                    <p className="text-white flex items-center">
                      <Sunset className="mr-2 text-orange-400" /> Sunset:{" "}
                      {data.astro.sunset}
                    </p>
                    <p className="text-white flex items-center">
                      <Sun className="mr-2 text-yellow-500" />
                      Sun is {data.astro.is_sun_up ? "up" : "down"}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                    <Moon className="mr-2" /> Moon Data
                  </h3>
                  <div className="space-y-2">
                    <p className="text-white flex items-center">
                      <MoonIcon className="mr-2 text-blue-300" /> Moonrise:{" "}
                      {data.astro.moonrise}
                    </p>
                    <p className="text-white flex items-center">
                      <MoonIcon className="mr-2 text-blue-200" /> Moonset:{" "}
                      {data.astro.moonset}
                    </p>
                    <p className="text-white flex items-center">
                      <Moon className="mr-2 text-blue-400" /> Phase:{" "}
                      {data.astro.moon_phase}
                    </p>
                    <p className="text-white flex items-center">
                      <Moon className="mr-2 text-blue-500" />
                      Illumination: {data.astro.moon_illumination}%
                    </p>
                    <p className="text-white flex items-center">
                      <Moon className="mr-2 text-blue-300" />
                      Moon is {data.astro.is_moon_up ? "up" : "down"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Astro;
