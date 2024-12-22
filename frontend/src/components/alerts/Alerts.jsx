import { useContext } from "react";
import { WeatherContext } from "../../context/dataFetchContext";
const Alerts = () => {
  const { weatherState } = useContext(WeatherContext);
  const { alerts } = weatherState.weather_alerts;

  return (
    <div className="bg-gray-100 p-4 rounded-lg cursor-pointer">
      {alerts.alert.length > 1 ? (
        alerts.alert.map((alert, index) => (
          <div key={index} className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <div
              className={`rounded-lg shadow-lg overflow-hidden bg-yellow-100 border-yellow-500 text-yellow-700`}
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{alert.event}</h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold bg-gray-500 text-white`}
                  >
                    {alert.urgency}
                  </span>
                </div>
                <p className="text-lg mb-4">{alert.headline}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold mb-1">Affected Areas:</h3>
                    <p>{alert.areas}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Category:</h3>
                    <p>{alert.category}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Certainty:</h3>
                    <p>{alert.certainty}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Message Type:</h3>
                    <p>{alert.msgtype}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-1">Effective:</h3>
                  <p>{new Date(alert.effective).toLocaleString()}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-1">Expires:</h3>
                  <p>{new Date(alert.expires).toLocaleString()}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Description:</h3>
                  <p className="whitespace-pre-line">{alert.desc}</p>
                </div>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Instructions:</h3>
                  <p className="whitespace-pre-line">{alert.instruction}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Note:</h3>
                  <p>{alert.note}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No current weather alerts</p>
      )}
    </div>
  );
};

export default Alerts;
