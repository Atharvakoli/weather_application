const { where } = require("sequelize");
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

async function getCurrentDetails() {
  let currentDetails = [];
  let current = await currentModel.findAll();
  for (const data of current) {
    let condition = await conditionModel.findOne({
      where: { currentId: data.id },
    });
    currentDetails.push({
      ...data.dataValues,
      condition: {
        ...condition.dataValues,
      },
    });
  }
  return currentDetails;
}

async function getForecastDetails() {
  let forecastdetails = [];
  let forecastday = await forecastdayModel.findAll();
  for (const day of forecastday) {
    let days = await dayModel.findOne({ where: { forecastdayId: day.id } });
    let hours = await hourModel.findAll({ where: { forecastdayId: day.id } });
    let astros = await astroModel.findOne({ where: { forecastdayId: day.id } });

    const dayCondition = await conditionModel.findOne({
      where: { dayId: days.id },
    });

    const hoursDetails = [];
    for (const hourData of hours) {
      const hourCondition = await conditionModel.findOne({
        where: { hourId: hourData.id },
      });

      hoursDetails.push({
        ...hourData.dataValues,
        condition: {
          ...hourCondition.dataValues,
        },
      });
    }

    forecastdetails.push({
      date: day.date,
      date_epoch: day.date_epoch,
      day: {
        ...days.dataValues,
        condition: {
          ...dayCondition.dataValues,
        },
      },
      astro: {
        ...astros.dataValues,
      },
      hour: hoursDetails,
    });
  }

  return forecastdetails;
}

async function getAllWeathers() {
  let weathers = [];
  let location = await locationModel.findAll();

  for (let i = 0; i < location.length; i++) {
    let currents = await getCurrentDetails();
    let forecastday = await getForecastDetails();
    weathers.push({
      location: {
        ...location[i].dataValues,
      },
      current: { ...currents[i] },
      forecast: {
        forecastday: forecastday[i],
      },
    });
  }

  return weathers;
}

module.exports = { getCurrentDetails, getForecastDetails, getAllWeathers };
