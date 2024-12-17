import { MapPin, Clock, AlertTriangle } from "lucide-react";
const Alerts = () => {
  let alerts = {
    location: {
      name: "Gujrat",
      region: "Punjab",
      country: "Pakistan",
      lat: 32.5667,
      lon: 74.0833,
      tz_id: "Asia/Karachi",
      localtime_epoch: 1734357120,
      localtime: "2024-12-16 18:52",
    },
    alerts: {
      alert: [],
    },
  };
  return (
    <div className="h-screen bg-gray-100 p-4 rounded-lg cursor-pointer">
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
          <div className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold flex items-center">
              <MapPin className="mr-2" />
              {location.name}, {location.country}
            </h1>
            <p className="text-blue-100">{location.region}</p>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-gray-500 text-sm">Latitude</p>
                <p className="font-semibold">{location.lat}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Longitude</p>
                <p className="font-semibold">{location.lon}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-500 text-sm">Time Zone</p>
              <p className="font-semibold">{location.tz_id}</p>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <div className="flex items-center">
                <Clock className="text-gray-400 mr-2" />
                <p className="text-gray-600">Local Time</p>
              </div>
              <p className="font-semibold">{location.localtime}</p>
            </div>
          </div>
          <div className="bg-gray-50 p-4">
            <div className="flex items-center">
              <AlertTriangle className="text-yellow-500 mr-2" />
              <h2 className="text-lg font-semibold">Alerts</h2>
            </div>
            {alerts.alerts.length > 0 ? (
              <ul className="mt-2 space-y-2">
                {alerts.alerts.map((alert, index) => (
                  <li key={index} className="text-red-600">
                    {alert}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 mt-2">No current alerts</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
