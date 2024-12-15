const axios = require("axios");
require("dotenv").config();
const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

module.exports = axiosInstance;
