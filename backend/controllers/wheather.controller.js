const {
  location: locationModel,
  current: currentModel,
  forecast: forecastModel,
  forecastday: forecastdayModel,
  day: dayModel,
  astro: astroModel,
  hour: hourModel,
  condition: conditionModel,
} = require("../models");

// Adding data
const addLocation = async (req, res) => {
  try {
    let { name, region, country, lat, lon, tz_id, localtime_epoch, localtime } =
      req.body;
    if (
      !name ||
      !region ||
      !country ||
      !lat ||
      !lon ||
      !tz_id ||
      !localtime_epoch ||
      !localtime
    ) {
      return res.status(404).json({ message: "Location Details are required" });
    }

    let location = await locationModel.create({
      name,
      region,
      country,
      lat,
      lon,
      tz_id,
      localtime_epoch,
      localtime,
    });

    if (!location) {
      return res
        .status(404)
        .json({ message: "Something went wrong while saving location" });
    }
    res.status(200).json({ message: "Location created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCurrent = async (req, res) => {
  try {
    let {
      last_updated_epoch,
      last_updated,
      temp_c,
      temp_f,
      is_day,
      conditionId,
      wind_mph,
      wind_kph,
      wind_degree,
      wind_dir,
      pressure_mb,
      pressure_in,
      precip_mm,
      precip_in,
      humidity,
      cloud,
      feelslike_c,
      feelslike_f,
      windchill_c,
      windchill_f,
      heatindex_c,
      heatindex_f,
      dewpoint_c,
      dewpoint_f,
      vis_km,
      vis_miles,
      uv,
      gust_mph,
      gust_kph,
    } = req.body;

    if (
      !last_updated_epoch ||
      !last_updated ||
      !temp_c ||
      !temp_f ||
      !is_day ||
      !conditionId ||
      !wind_mph ||
      !wind_kph ||
      !wind_degree ||
      !wind_dir ||
      !pressure_mb ||
      !pressure_in ||
      !precip_mm ||
      !precip_in ||
      !humidity ||
      !cloud ||
      !feelslike_c ||
      !feelslike_f ||
      !windchill_c ||
      !windchill_f ||
      !heatindex_c ||
      !heatindex_f ||
      !dewpoint_c ||
      !dewpoint_f ||
      !vis_km ||
      !vis_miles ||
      !uv ||
      !gust_mph ||
      !gust_kph
    ) {
      return res.status(404).json({ message: "Location, NOT FOUND" });
    }
    let current = await currentModel.create({
      last_updated_epoch,
      last_updated,
      temp_c,
      temp_f,
      is_day,
      conditionId,
      wind_mph,
      wind_kph,
      wind_degree,
      wind_dir,
      pressure_mb,
      pressure_in,
      precip_mm,
      precip_in,
      humidity,
      cloud,
      feelslike_c,
      feelslike_f,
      windchill_c,
      windchill_f,
      heatindex_c,
      heatindex_f,
      dewpoint_c,
      dewpoint_f,
      vis_km,
      vis_miles,
      uv,
      gust_mph,
      gust_kph,
    });
    if (!current) {
      return res
        .status(404)
        .json({ message: "Something went wrong while saving Current weather" });
    }
    res.status(200).json({ message: "Current weather created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addForecast = async (req, res) => {
  try {
    let { forecastdayId } = req.body;
    if (!forecastdayId) {
      return res.status(404).json({ message: "Forecast details are required" });
    }
    let forecast = await forecastModel.create({ forecastdayId });
    if (!forecast) {
      return res
        .status(404)
        .json({ message: "Something went wrong while saving forecast" });
    }
    res.status(200).json({ message: "Forecast created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addForecastday = async (req, res) => {
  try {
    let { date, date_epoch, dayId, astroId, hourId } = req.body;
    if (!date || !date_epoch || !dayId || !astroId || !hourId) {
      return res
        .status(404)
        .json({ message: "Forecastday Details are required." });
    }
    let forecastday = await forecastdayModel.create({
      date,
      date_epoch,
      dayId,
      astroId,
      hourId,
    });
    if (!forecastday) {
      return res
        .status(404)
        .json({ message: "Something went wrong while saving forecastday." });
    }
    res.status(200).json({ message: "Forecastday created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addDay = async (req, res) => {
  try {
    let {
      maxtemp_c,
      maxtemp_f,
      mintemp_c,
      mintemp_f,
      avgtemp_c,
      avgtemp_f,
      maxwind_mph,
      maxwind_kph,
      totalprecip_mm,
      totalprecip_in,
      totalsnow_cm,
      avgvis_km,
      avgvis_miles,
      avghumidity,
      daily_will_it_rain,
      daily_chance_of_rain,
      daily_will_it_snow,
      daily_chance_of_snow,
      uv,
      conditionId,
    } = req.body;

    if (
      !maxtemp_f ||
      !mintemp_c ||
      !mintemp_f ||
      !avgtemp_c ||
      !avgtemp_f ||
      !maxwind_mph ||
      !maxwind_kph ||
      !totalprecip_mm ||
      !totalprecip_in ||
      !totalsnow_cm ||
      !avgvis_km ||
      !avgvis_miles ||
      !avghumidity ||
      !daily_will_it_rain ||
      !daily_chance_of_rain ||
      !daily_will_it_snow ||
      !daily_chance_of_snow ||
      !uv ||
      !conditionId
    ) {
      return res.status(404).json({ message: "Day details are required." });
    }

    let day = await dayModel.create({
      maxtemp_f,
      mintemp_c,
      mintemp_f,
      avgtemp_c,
      avgtemp_f,
      maxwind_mph,
      maxwind_kph,
      totalprecip_mm,
      totalprecip_in,
      totalsnow_cm,
      avgvis_km,
      avgvis_miles,
      avghumidity,
      daily_will_it_rain,
      daily_chance_of_rain,
      daily_will_it_snow,
      daily_chance_of_snow,
      uv,
      conditionId,
    });
    if (!day) {
      return res
        .status(404)
        .json({ message: "Something went wrong while saving day" });
    }
    res.status(200).json({ message: "Day created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addAstro = async (req, res) => {
  try {
    let {
      sunrise,
      sunset,
      moonrise,
      moonset,
      moon_phase,
      moon_illumination,
      is_moon_up,
      is_sun_up,
    } = req.body;
    if (
      !sunrise ||
      !sunset ||
      !moonrise ||
      !moonset ||
      !moon_phase ||
      !moon_illumination ||
      !is_moon_up ||
      !is_sun_up
    ) {
      return res.status(404).json({ message: "Astro details are required." });
    }
    let astro = await astroModel.create({
      sunrise,
      sunset,
      moonrise,
      moonset,
      moon_phase,
      moon_illumination,
      is_moon_up,
      is_sun_up,
    });
    if (!astro) {
      return res
        .status(404)
        .json({ message: "Something went wrong while saving astro" });
    }
    res.status(200).json({ message: "Location created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addHour = async (req, res) => {
  try {
    let {
      time_epoch,
      time,
      temp_c,
      temp_f,
      is_day,
      conditionId,
      wind_mph,
      wind_kph,
      wind_degree,
      wind_dir,
      pressure_mb,
      pressure_in,
      precip_mm,
      precip_in,
      snow_cm,
      humidity,
      cloud,
      feelslike_c,
      feelslike_f,
      windchill_c,
      windchill_f,
      heatindex_c,
      heatindex_f,
      dewpoint_c,
      dewpoint_f,
      will_it_rain,
      chance_of_rain,
      will_it_snow,
      chance_of_snow,
      vis_km,
      vis_miles,
      gust_mph,
      gust_kph,
      uv,
    } = req.body;

    if (
      !time_epoch ||
      !time ||
      !temp_c ||
      !temp_f ||
      !is_day ||
      !conditionId ||
      !wind_mph ||
      !wind_kph ||
      !wind_degree ||
      !wind_dir ||
      !pressure_mb ||
      !pressure_in ||
      !precip_mm ||
      !precip_in ||
      !snow_cm ||
      !humidity ||
      !cloud ||
      !feelslike_c ||
      !feelslike_f ||
      !windchill_c ||
      !windchill_f ||
      !heatindex_c ||
      !heatindex_f ||
      !dewpoint_c ||
      !dewpoint_f ||
      !will_it_rain ||
      !chance_of_rain ||
      !will_it_snow ||
      !chance_of_snow ||
      !vis_km ||
      !vis_miles ||
      !gust_mph ||
      !gust_kph
    ) {
      return res.status(404).json({ message: "Hour details are required." });
    }

    let hour = await hourModel.create({
      time_epoch,
      time,
      temp_c,
      temp_f,
      is_day,
      conditionId,
      wind_mph,
      wind_kph,
      wind_degree,
      wind_dir,
      pressure_mb,
      pressure_in,
      precip_mm,
      precip_in,
      snow_cm,
      humidity,
      cloud,
      feelslike_c,
      feelslike_f,
      windchill_c,
      windchill_f,
      heatindex_c,
      heatindex_f,
      dewpoint_c,
      dewpoint_f,
      will_it_rain,
      chance_of_rain,
      will_it_snow,
      chance_of_snow,
      vis_km,
      vis_miles,
      gust_mph,
      gust_kph,
      uv,
    });

    if (!hour) {
      return res
        .status(404)
        .json({ message: "Something went wrong while saving hour" });
    }
    res.status(200).json({ message: "Hour created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCondition = async (req, res) => {
  try {
    let { text, icon, code } = req.body;
    if (!text || !icon || !code) {
      return res
        .status(404)
        .json({ message: "Condition details are required" });
    }
    let condition = await conditionModel.create({ text, icon, code });
    if (!condition) {
      return res
        .status(404)
        .json({ message: "Something went wrong while saving condition" });
    }
    res.status(200).json({ message: "Condition created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addLocation,
  addCurrent,
  addForecast,
  addForecastday,
  addAstro,
  addDay,
  addHour,
  addCondition,
};
