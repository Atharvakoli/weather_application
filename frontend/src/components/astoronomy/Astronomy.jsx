import { MapPin, Sun, Moon, Clock } from "lucide-react";
const Astronomy = () => {
  const data = {
    location: {
      name: "Mumbai",
      region: "Maharashtra",
      country: "India",
      lat: 18.975,
      lon: 72.826,
      tz_id: "Asia/Kolkata",
      localtime_epoch: 1734354404,
      localtime: "2024-12-16 18:36",
    },
    astronomy: {
      astro: {
        sunrise: "07:12 AM",
        sunset: "06:12 PM",
        moonrise: "10:51 PM",
        moonset: "10:59 AM",
        moon_phase: "Waning Gibbous",
        moon_illumination: 80,
        is_moon_up: 1,
        is_sun_up: 0,
      },
    },
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4 rounded-lg cursor-pointer">
      <div className="flex items-center justify-center p-4">
        <div className="bg-gray-800 text-white rounded-lg shadow-xl max-w-md w-full">
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
