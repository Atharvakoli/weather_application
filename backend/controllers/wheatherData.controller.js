const {
  getWeather,
  getWeatherForcast,
  getWeatherSearch,
  getWeatherHistory,
  getAlerts,
  getFutureWheather,
  getMarineWheather,
  getAstronomyWheather,
  getTimeZoneWheather,
} = require("../service/index.service");
const {
  validateDetails,
  validateHistoryDetails,
  validateFutureDetails,
  validateMarineDetails,
  validateAstronomyDetails,
  validateTimeZoneDetails,
  validateAlertDetails,
} = require("./validation/validate");

const currentWeather = async (req, res) => {
  try {
    let { q } = req.query;

    let errors = validateDetails(q);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    const response = await getWeather(q);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: `Current weather Error: ${error.message}` });
  }
};

const weatherForcast = async (req, res) => {
  try {
    let { q, days } = req.query;

    let errors = validateDetails(q, days);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    const response = await getWeatherForcast(q, days);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Current weather Forcast Error: ${error.message}` });
  }
};

const weatherSearch = async (req, res) => {
  try {
    let { q, days } = req.query;

    let errors = validateDetails(q, days);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    const response = await getWeatherSearch(q, days);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Current weather Search Error: ${error.message}` });
  }
};

const weatherHistory = async (req, res) => {
  try {
    let { q, dt } = req.query;

    let errors = validateHistoryDetails(q, dt);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }
    console.log(errors);

    const response = await getWeatherHistory(q, dt);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Current weather History Error: ${error.message}` });
  }
};

const weatherAlerts = async (req, res) => {
  try {
    let { q } = req.query;

    let errors = validateAlertDetails(q);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    const response = await getAlerts(q);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Current weather Alerts Error: ${error.message}` });
  }
};

const futureWeather = async (req, res) => {
  try {
    let { q, dt } = req.query;

    let errors = validateFutureDetails(q, dt);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    const response = await getFutureWheather(q, dt);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Current weather Alerts Error: ${error.message}` });
  }
};

const weatherMarine = async (req, res) => {
  try {
    let { q, days } = req.query;

    let errors = validateMarineDetails(q, days);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    const response = await getMarineWheather(q, days);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Current weather Marine Error: ${error.message}` });
  }
};

const weatherAstronomy = async (req, res) => {
  try {
    let { q, dt } = req.query;

    let errors = validateAstronomyDetails(q, dt);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    const response = await getAstronomyWheather(q, dt);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Current weather Astronomy Error: ${error.message}` });
  }
};

const weatherTimeZone = async (req, res) => {
  try {
    let { q } = req.query;

    let errors = validateTimeZoneDetails(q);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    const response = await getTimeZoneWheather(q);

    if (response === null) {
      return res.status(400).json({ message: "Something went wrong" });
    }
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ error: `Current weather Time zone Error: ${error.message}` });
  }
};

module.exports = {
  currentWeather,
  weatherForcast,
  weatherSearch,
  weatherHistory,
  weatherAlerts,
  futureWeather,
  weatherMarine,
  weatherAstronomy,
  weatherTimeZone,
};
