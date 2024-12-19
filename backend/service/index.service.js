const axiosInstance = require("../lib/index.axios");
require("dotenv").config();

async function getWeather(query) {
  const response = await axiosInstance.get(
    `/current.json?key=${process.env.API_KEY}&q=${query}&aql=yes`
  );
  return response.data;
}

async function getWeatherForcast(query, days) {
  const response = await axiosInstance.get(
    `/forecast.json?key=${process.env.API_KEY}&q=${query}&days=${days}&aql=yes`
  );
  return response.data;
}

async function getWeatherSearch(query) {
  const response = await axiosInstance.get(
    `/search.json?key=${process.env.API_KEY}&q=${query}`
  );
  return response.data;
}

async function getWeatherHistory(query, dt) {
  const response = await axiosInstance.get(
    `/history.json?key=${process.env.API_KEY}&q=${query}&dt=${dt}`
  );
  return response.data;
}

async function getAlerts(query) {
  const response = await axiosInstance.get(
    `/alerts.json?key=${process.env.API_KEY}&q=${query}`
  );
  return response.data;
}

async function getFutureWheather(query, dt) {
  const response = await axiosInstance.get(
    `/future.json?key=${process.env.API_KEY}&q=${query}&dt=${dt}`
  );
  return response.data;
}

async function getMarineWheather(query, days) {
  const response = await axiosInstance.get(
    `/marine.json?key=${process.env.API_KEY}&q=${query}&days=${days}`
  );
  return response.data;
}

async function getAstronomyWheather(query, dt) {
  const response = await axiosInstance.get(
    `/astronomy.json?key=${process.env.API_KEY}&q=${query}&dt=${dt}`
  );
  return response.data;
}

async function getTimeZoneWheather(query) {
  const response = await axiosInstance.get(
    `/timezone.json?key=${process.env.API_KEY}&q=${query}`
  );
  return response.data;
}

const setSecureCookie = (res, token) => {
  res.cookie("access_token", token, {
    httpOnly: true,
    maxAge: 60 * 1000,
  });
  return res;
};

module.exports = {
  getWeather,
  getWeatherForcast,
  getWeatherSearch,
  getWeatherHistory,
  getAlerts,
  getFutureWheather,
  getMarineWheather,
  getAstronomyWheather,
  getTimeZoneWheather,
  setSecureCookie,
};
