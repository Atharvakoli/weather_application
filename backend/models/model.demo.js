const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "mysql", // or any other dialect supported by Sequelize
});

// Define the Location model
const Location = sequelize.define(
  "Location",
  {
    // Add location-specific fields here
  },
  {
    timestamps: false,
  }
);

// Define the Current model
const Current = sequelize.define(
  "Current",
  {
    // Add current-specific fields here
  },
  {
    timestamps: false,
  }
);

// Define the Forecast model
const Forecast = sequelize.define(
  "Forecast",
  {
    // Add forecast-specific fields here
  },
  {
    timestamps: false,
  }
);

// Define the ForecastDay model
const ForecastDay = sequelize.define(
  "ForecastDay",
  {
    // Add fields specific to forecast days here
  },
  {
    timestamps: false,
  }
);

// Define the Day model
const Day = sequelize.define(
  "Day",
  {
    // Add day-specific fields here
  },
  {
    timestamps: false,
  }
);

// Define the Condition model
const Condition = sequelize.define(
  "Condition",
  {
    // Add condition-specific fields here
  },
  {
    timestamps: false,
  }
);

// Define the Astro model
const Astro = sequelize.define(
  "Astro",
  {
    // Add astro-specific fields here
  },
  {
    timestamps: false,
  }
);

// Define the Hour model
const Hour = sequelize.define(
  "Hour",
  {
    // Add hour-specific fields here
  },
  {
    timestamps: false,
  }
);

// Define relationships
Location.hasOne(Current, { foreignKey: "locationId" });
Current.belongsTo(Location, { foreignKey: "locationId" });

Location.hasOne(Forecast, { foreignKey: "locationId" });
Forecast.belongsTo(Location, { foreignKey: "locationId" });

Forecast.hasMany(ForecastDay, { foreignKey: "forecastId" });
ForecastDay.belongsTo(Forecast, { foreignKey: "forecastId" });

ForecastDay.hasOne(Day, { foreignKey: "forecastDayId" });
Day.belongsTo(ForecastDay, { foreignKey: "forecastDayId" });

Day.hasOne(Condition, { foreignKey: "dayId" });
Condition.belongsTo(Day, { foreignKey: "dayId" });

ForecastDay.hasOne(Astro, { foreignKey: "forecastDayId" });
Astro.belongsTo(ForecastDay, { foreignKey: "forecastDayId" });

ForecastDay.hasMany(Hour, { foreignKey: "forecastDayId" });
Hour.belongsTo(ForecastDay, { foreignKey: "forecastDayId" });

Hour.hasOne(Condition, { foreignKey: "hourId" });
Condition.belongsTo(Hour, { foreignKey: "hourId" });

// Sync models
(async () => {
  await sequelize.sync({ force: true });
  console.log("Database & tables created!");
})();

module.exports = {
  Location,
  Current,
  Forecast,
  ForecastDay,
  Day,
  Condition,
  Astro,
  Hour,
};
