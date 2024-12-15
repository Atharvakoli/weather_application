import React from "react";

import { useState } from "react";
import WeatherApp from "./components/WeatherApp";

const App = () => {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-700 p-4">
        <WeatherApp />
      </main>
    </>
  );
};

export default App;
