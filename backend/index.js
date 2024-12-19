const express = require("express");
const axios = require("axios");
const cors = require("cors");
const cookieParser = require("cookie-parser");
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
const {
  addLocation,
  addCurrent,
  addForecast,
  addForecastday,
  addDay,
  addHour,
  addCondition,
  addAstro,
} = require("./controllers/wheather.controller");
require("dotenv").config();

let PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/current_weather", currentWeather);
app.get("/weather_forecast", weatherForcast);
app.get("/weather_search", weatherSearch);
app.get("/weather_history", weatherHistory);
app.get("/weather_alerts", weatherAlerts);
app.get("/weather_future", futureWeather);
app.get("/weather_marine", weatherMarine);
app.get("/weather_astronomy", weatherAstronomy);
app.get("/weather_timezone", weatherTimeZone);

app.post("/location", addLocation);
app.post("/current", addCurrent);
app.post("/forecast", addForecast);
app.post("/forecastday", addForecastday);
app.post("/day", addDay);
app.post("/astro", addAstro);
app.post("/hour", addHour);
app.post("/condition", addCondition);

app.listen(PORT, () =>
  console.log(`Example app listening on http://localhost:${PORT}`)
);

module.exports = app;
