import { MapPin, Sun, Moon, Clock } from "lucide-react";
import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";
const Astronomy = () => {
  const { weatherState } = useContext(WeatherContext);
  const data = weatherState.weather_astronomy;
  return (
    <div className=" bg-gray-100 p-4 rounded-lg cursor-pointer">
      <div className="flex items-center justify-center p-4">
        <div className="bg-gray-800 text-white rounded-lg shadow-xl w-full">
          <div className="bg-gray-700 rounded-t-lg p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold flex items-center">
                <MapPin className="mr-2" />
                {data.location.name}
              </h1>
              <p className="text-gray-300">{data.location.localtime}</p>
            </div>
            <p className="text-gray-400 mt-1">
              {data.location.region}, {data.location.country}
            </p>
          </div>

          <div className="p-6 border-b border-gray-700">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400">Latitude</p>
                <p>{data.location.lat}°</p>
              </div>
              <div>
                <p className="text-gray-400">Longitude</p>
                <p>{data.location.lon}°</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400">Time Zone</p>
                <p>{data.location.tz_id}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Astronomy</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Sun className="mr-2 text-yellow-500" />
                <div>
                  <p className="text-gray-400">Sunrise</p>
                  <p>{data.astronomy.astro.sunrise}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Sun className="mr-2 text-orange-500" />
                <div>
                  <p className="text-gray-400">Sunset</p>
                  <p>{data.astronomy.astro.sunset}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Moon className="mr-2 text-blue-300" />
                <div>
                  <p className="text-gray-400">Moonrise</p>
                  <p>{data.astronomy.astro.moonrise}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Moon className="mr-2 text-gray-400" />
                <div>
                  <p className="text-gray-400">Moonset</p>
                  <p>{data.astronomy.astro.moonset}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Moon Phase</h3>
              <div className="flex items-center justify-between">
                <p>{data.astronomy.astro.moon_phase}</p>
                <div className="w-16 h-16 rounded-full bg-gray-700 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-blue-300 rounded-full"
                    style={{
                      clipPath: `inset(0 ${
                        100 - data.astronomy.astro.moon_illumination
                      }% 0 0)`,
                    }}
                  ></div>
                </div>
                <p>{data.astronomy.astro.moon_illumination}% illuminated</p>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="flex items-center">
                <Clock className="mr-2" />
                <p>Current Status:</p>
              </div>
              <p>
                {data.astronomy.astro.is_sun_up ? "Day" : "Night"}, Moon is{" "}
                {data.astronomy.astro.is_moon_up ? "visible" : "not visible"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astronomy;
