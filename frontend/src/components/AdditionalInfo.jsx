import React from "react";

const AdditionalInfo = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">History</h3>
          <p>Past 7 days average: 23°C</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Alerts</h3>
          <p>No current weather alerts</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Marine</h3>
          <p>Wave height: 0.5m</p>
          <p>Water temperature: 18°C</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Astronomy</h3>
          <p>Sunrise: 05:30 AM</p>
          <p>Sunset: 08:45 PM</p>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
