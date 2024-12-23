// validations of wheatherData
const validateDetails = (q, days) => {
  let errors = [];
  if (!q || typeof q !== "string")
    errors.push("Query is required and should be string.");
  return errors;
};

const validateHistoryDetails = (q, dt) => {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  const date = new Date("2024-01-01");

  if (!dt || typeof dt !== "string" || !dateRegex.test(dt)) {
    errors.push("date is required, should be string and with a date format.");
  }
  const input = new Date(dt);
  if (input < date)
    errors.push(
      `Date should be greater then ${date.toISOString()?.split("T")[0]}`
    );
  return errors;
};

function isDateInRange(inputDate) {
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() + 14);

  const endDate = new Date(today);
  endDate.setDate(today.getDate() + 300);

  const parsedDate = new Date(inputDate);

  return parsedDate >= startDate && parsedDate <= endDate;
}

const validateFutureDetails = (q, dt) => {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  if (!dt || typeof dt !== "string" || !dateRegex.test(dt)) {
    errors.push("date is required, should be string and with a date format.");
  }
  const input = new Date(dt);
  console.log(isDateInRange(input));
  if (!isDateInRange(input))
    errors.push(`Date should be 14 days from now till 300 days`);
  return errors;
};

const validateAlertDetails = (q) => {
  let errors = [];
  if (!q || typeof q !== "string")
    errors.push("Query is required and should be string.");
  return errors;
};

const validateMarineDetails = (q, days) => {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  if (
    !days ||
    typeof days !== "string" ||
    (!parseInt(days) >= 1 && !parseInt(days) <= 7)
  ) {
    errors.push("days is required, should be string and between 1 to 7.");
  }
  return errors;
};

const validateAstronomyDetails = (q, dt) => {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

  if (!dt || typeof dt !== "string" || !dateRegex.test(dt)) {
    errors.push("date is required, should be string and with a date format.");
  }
  return errors;
};

function validateTimeZoneDetails(q) {
  let errors = [];
  if (!q || typeof q !== "string") {
    errors.push("Query is required and should be string.");
  }
  return errors;
}

function validateWeatherDetails(details) {
  let errors = [];
  let { location, current, forecast } = details;
  let { name, region, country, lat, lon, tz_id, localtime, localtime_epoch } =
    location;

  if (
    !name ||
    !region ||
    typeof region !== "string" ||
    !country ||
    typeof country !== "string" ||
    !lat ||
    typeof lat !== "number" ||
    !lon ||
    typeof lon !== "number" ||
    !tz_id ||
    typeof tz_id !== "string" ||
    !localtime ||
    typeof localtime !== "string" ||
    !localtime_epoch ||
    typeof localtime_epoch !== "number"
  ) {
    errors.push(
      "Location credential are required and should be its specific type"
    );
  }

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
  if (
    last_updated_epoch === null ||
    !last_updated ||
    temp_c === null ||
    temp_f === null ||
    is_day === null ||
    condition === null ||
    wind_mph === null ||
    wind_kph === null ||
    wind_degree === null ||
    !wind_dir ||
    pressure_mb === null ||
    pressure_in === null ||
    precip_mm === null ||
    precip_in === null ||
    humidity === null ||
    cloud === null ||
    feelslike_c === null ||
    feelslike_f === null ||
    windchill_c === null ||
    windchill_f === null ||
    heatindex_c === null ||
    heatindex_f === null ||
    dewpoint_c === null ||
    dewpoint_f === null ||
    vis_km === null ||
    vis_miles === null ||
    uv === null ||
    gust_mph === null ||
    gust_mph === null ||
    gust_kph === null
  ) {
    errors.push("Current weather details are required");
  }

  const currentCondition = condition;

  if (
    !currentCondition.text ||
    !currentCondition.icon ||
    !currentCondition.code
  ) {
    errors.push("current condition credentails is required");
  }

  const forecastday = forecast.forecastday;

  if (!forecastday || !Array.isArray(forecastday)) {
    errors.push("forecatsday is required and should be an array");
  }

  if (!forecast.forecastday || !Array.isArray(forecast.forecastday)) {
    errors.push("forecast day is required ans should be an array");
  }

  for (const { date, date_epoch, day, astro, hour } of forecast.forecastday) {
    if (!date || !date_epoch) {
      errors.push("Day date and Day day is required");
    }

    const dayCondition = day.condition;

    if (!dayCondition.text || !dayCondition.icon || !dayCondition.code) {
      errors.push("current condition credentails is required");
    }

    if (!day || !astro) {
      errors.push("day and astro is required");
    }

    const {
      sunrise,
      sunset,
      moonrise,
      moonset,
      moon_phase,
      moon_illumination,
      is_moon_up,
      is_sun_up,
    } = astro;

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
    } = day;

    if (
      maxtemp_c === null ||
      maxtemp_f === null ||
      mintemp_c === null ||
      mintemp_f === null ||
      avgtemp_c === null ||
      avgtemp_f === null ||
      maxwind_mph === null ||
      maxwind_kph === null ||
      totalprecip_mm === null ||
      totalprecip_in === null ||
      totalsnow_cm === null ||
      avgvis_km === null ||
      avgvis_miles === null ||
      avghumidity === null ||
      daily_will_it_rain === null ||
      daily_chance_of_rain === null ||
      daily_will_it_snow === null ||
      daily_chance_of_snow === null
    ) {
      errors.push("days credentails are required");
    }

    if (!day.condition.text || !day.condition.icon || !day.condition.code) {
      errors.push("Day condition is required");
    }

    if (
      !sunrise ||
      !sunset ||
      !moonrise ||
      !moonset ||
      !moon_phase ||
      moon_illumination === null ||
      is_moon_up === null ||
      is_sun_up === null
    ) {
      errors.push("Astro details are required");
    }

    if (!hour || !Array.isArray(hour)) {
      errors.push("Hour is required and should be an array");
    }

    for (const dayHour of hour) {
      const hourCondition = dayHour.condition;

      if (!hourCondition.text || !hourCondition.icon || !hourCondition.code) {
        errors.push("current condition credentails is required");
      }
      if (
        dayHour.time_epoch === null ||
        !dayHour.time ||
        dayHour.temp_c === null ||
        dayHour.temp_f === null ||
        dayHour.is_day === null ||
        dayHour.conditio === null ||
        dayHour.wind_mph === null ||
        dayHour.wind_kph === null ||
        dayHour.wind_degree === null ||
        !dayHour.wind_dir ||
        dayHour.pressure_mb === null ||
        dayHour.pressure_in === null ||
        dayHour.precip_mm === null ||
        dayHour.precip_in === null ||
        dayHour.snow_cm === null ||
        dayHour.humidity === null ||
        dayHour.cloud === null ||
        dayHour.feelslike_c === null ||
        dayHour.feelslike_f === null ||
        dayHour.windchill_c === null ||
        dayHour.windchill_f === null ||
        dayHour.heatindex_c === null ||
        dayHour.heatindex_f === null ||
        dayHour.dewpoint_c === null ||
        dayHour.dewpoint_f === null ||
        dayHour.will_it_rain === null ||
        dayHour.chance_of_rain === null ||
        dayHour.will_it_snow === null ||
        dayHour.chance_of_snow === null ||
        dayHour.vis_km === null ||
        dayHour.vis_miles === null ||
        dayHour.gust_mph === null ||
        dayHour.gust_kph === null ||
        dayHour.uv === null
      ) {
        errors.push("Hour credentails are required");
      }
    }
  }

  return errors;
}

module.exports = {
  validateWeatherDetails,
  validateDetails,
  validateHistoryDetails,
  validateFutureDetails,
  validateMarineDetails,
  validateAstronomyDetails,
  validateTimeZoneDetails,
  validateAlertDetails,
};
