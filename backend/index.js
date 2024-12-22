const express = require("express");
require("dotenv").config();
const axios = require("axios");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const verifyAccessToken = require("./middleware/index.middleware");
const { setSecureCookie } = require("./service/index.service");
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
const { addWeather, getWeather } = require("./controllers/wheather.controller");

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

app.post("/weathers", addWeather);
app.get("/weathers", getWeather);

app.get("/user/profile/github", verifyAccessToken, async (req, res) => {
  try {
    const { access_token } = req.cookies;
    const githubUserDataResponse = await axios.get(
      `https://api.github.com/user`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    https: res.json({ user: githubUserDataResponse.data });
  } catch (error) {
    res.status(500).json({ error: `Can't fetch user github profile.` });
  }
});

app.get("/auth/github", (req, res) => {
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user,repo,security_events`;
  res.redirect(githubAuthUrl);
});

app.get("/auth/github/callback", async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send(`Authorization code not provided.`);
  }

  try {
    const tokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    setSecureCookie(res, accessToken);
    return res.redirect(`${process.env.FRONTEND_URL}`);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.get("/user/profile/google", verifyAccessToken, async (req, res) => {
  try {
    const { access_token } = req.cookies;
    console.log("access_token ", access_token);
    const googleUserDataResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    res.json({ user: googleUserDataResponse.data });
  } catch (error) {
    res.status(500).json({ error: `Can't fetch user google profile.` });
  }
});

app.get("/auth/google", (req, res) => {
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:${PORT}/auth/google/callback&response_type=code&scope=profile%20email`;
  res.redirect(googleAuthUrl);
});

app.get("/auth/google/callback", async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send(`Authorization code not provided.`);
  }

  let accessToken;

  try {
    const tokenResponse = await axios.post(
      `https://oauth2.googleapis.com/token`,
      {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        code,
        grant_type: "authorization_code",
        redirect_uri: `http://localhost:${PORT}/auth/google/callback`,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    accessToken = tokenResponse.data.access_token;
    setSecureCookie(res, accessToken);
    return res.redirect(`${process.env.FRONTEND_URL}`);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () =>
  console.log(`Example app listening on http://localhost:${PORT}`)
);
