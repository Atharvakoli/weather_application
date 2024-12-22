const { v4: uuidv4 } = require("uuid");
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
const { validateWeatherDetails } = require("./validation/validate");
const { getAllWeathers, getForecastDetails } = require("../helper/helper");

// Adding data
const addWeather = async (req, res) => {
  try {
    const errors = validateWeatherDetails(req.body);

    if (errors.length > 0) {
      return res.status(404).json({ errors });
    }

    let { location, current, forecast } = req.body;

    const {
      last_updated_epoch,
      last_updated,
      temp_c,
      temp_f,
      is_day,
      condition,
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
    } = current;
    const { text, icon, code } = condition;

    await locationModel.create({ id: uuidv4(), ...location });

    const currentData = {
      last_updated_epoch,
      last_updated,
      temp_c,
      temp_f,
      is_day,
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
    };

    const currents = await currentModel.create({
      id: uuidv4(),
      ...currentData,
    });

    const forecasts = await forecastModel.create({
      id: uuidv4(),
    });

    if (!forecasts) {
      return res
        .status(400)
        .json({ message: "Something went wrong while creating forcast" });
    }

    for (const day of forecast.forecastday) {
      const forecastdayDetails = {
        id: uuidv4(),
        date: day.date,
        date_epoch: day.date_epoch,
        forecastId: forecasts.id,
      };

      let forecastday = await forecastdayModel.create(forecastdayDetails);

      if (!forecastday) {
        return res
          .status(400)
          .json({ message: "Something went wrong while creating forcastday" });
      }

      const {
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
      } = day.day;

      const daysDetails = {
        id: uuidv4(),
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
        forecastdayId: forecastday.id,
      };

      const days = await dayModel.create(daysDetails);

      if (!days) {
        return res
          .status(400)
          .json({ message: "Something went wrong while creating day" });
      }

      const dayConditions = await conditionModel.create({
        id: uuidv4(),
        ...day.day.condition,
        currentId: null,
        dayId: days.id,
        hourId: null,
      });

      if (!dayConditions) {
        return res.status(400).json({
          message: "Something went wrong while creating dayCondition",
        });
      }

      const astro = await astroModel.create({
        id: uuidv4(),
        ...day.astro,
        forecastdayId: forecastday.id,
      });

      if (!astro) {
        return res
          .status(400)
          .json({ message: "Something went wrong while creating forcast" });
      }

      for (const hours of day.hour) {
        let hour = await hourModel.create({
          id: uuidv4(),
          ...hours,
          forecastdayId: forecastday.id,
        });

        if (!hour) {
          return res
            .status(400)
            .json({ message: "Something went wrong while creating hour" });
        }

        const hourCondition = await conditionModel.create({
          id: uuidv4(),
          ...hours.condition,
          hourId: hour.id,
          currentId: null,
          dayId: null,
        });

        if (!hourCondition) {
          return res.status(400).json({
            message: "Something went wrong while creating hour condition",
          });
        }
      }
    }

    const currentCondition = await conditionModel.create({
      id: uuidv4(),
      text,
      icon,
      code,
      currentId: currents.id,
      dayId: null,
      hourId: null,
    });

    if (!currentCondition) {
      return res.status(400).json({
        message: "Something went wrong while creating current condition",
      });
    }

    res.status(201).json({ message: "Weather created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getWeather = async (req, res) => {
  try {
    let weathers = await getAllWeathers();
    if (!weathers) {
      return res.status(404).json({ message: "Weathers NOT FOUND" });
    }
    res.status(200).json({ message: "Weathers Get successfully", weathers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addWeather,
  getWeather,
};
