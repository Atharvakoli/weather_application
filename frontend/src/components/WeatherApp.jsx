import React from "react";

import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import AdditionalInfo from "./AdditionalInfo";

const WeatherApp = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-center mb-4">Weather App</h1>
          <SearchBar />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <CurrentWeather />
          <Forecast />
        </div>
        <AdditionalInfo />
      </div>
    </>
  );
};

export default WeatherApp;
