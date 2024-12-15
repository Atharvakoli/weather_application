const express = require("express");
const cors = require("cors");
const {
  currentWeather,
  weatherForcast,
  weatherSearch,
  weatherHistory,
  weatherAlerts,
  futureWeather,
  weatherMarine,
  weatherAstronomy,
  weatherTimeZone,
} = require("./controllers/wheatherData.controller");
require("dotenv").config();
let PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/current_weather", currentWeather);
app.get("/weather_forcast", weatherForcast);
app.get("/weather_search", weatherSearch);
app.get("/weather_history", weatherHistory);
app.get("/weather_alerts", weatherAlerts);
app.get("/weather_future", futureWeather);
app.get("/weather_marine", weatherMarine);
app.get("/weather_astronomy", weatherAstronomy);
app.get("/weather_timezone", weatherTimeZone);

app.listen(PORT, () =>
  console.log(`Example app listening on http://localhost:${PORT}`)
);
