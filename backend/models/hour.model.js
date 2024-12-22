module.exports = (sequelize, DataTypes) => {
  const hour = sequelize.define(
    "hour",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      time_epoch: { type: DataTypes.INTEGER },
      time: { type: DataTypes.STRING },
      temp_c: { type: DataTypes.FLOAT },
      temp_f: { type: DataTypes.FLOAT },
      is_day: { type: DataTypes.BOOLEAN },
      forecastdayId: {
        type: DataTypes.UUID,
        references: {
          model: "forecastday",
          key: "id",
        },
      },
      wind_mph: { type: DataTypes.FLOAT },
      wind_kph: { type: DataTypes.FLOAT },
      wind_degree: { type: DataTypes.INTEGER },
      wind_dir: { type: DataTypes.STRING },
      pressure_mb: { type: DataTypes.FLOAT },
      pressure_in: { type: DataTypes.FLOAT },
      precip_mm: { type: DataTypes.FLOAT },
      precip_in: { type: DataTypes.FLOAT },
      snow_cm: { type: DataTypes.FLOAT },
      humidity: { type: DataTypes.INTEGER },
      cloud: { type: DataTypes.INTEGER },
      feelslike_c: { type: DataTypes.FLOAT },
      feelslike_f: { type: DataTypes.FLOAT },
      windchill_c: { type: DataTypes.FLOAT },
      windchill_f: { type: DataTypes.FLOAT },
      heatindex_c: { type: DataTypes.FLOAT },
      heatindex_f: { type: DataTypes.FLOAT },
      dewpoint_c: { type: DataTypes.FLOAT },
      dewpoint_f: { type: DataTypes.FLOAT },
      will_it_rain: { type: DataTypes.BOOLEAN },
      chance_of_rain: { type: DataTypes.INTEGER },
      will_it_snow: { type: DataTypes.BOOLEAN },
      chance_of_snow: { type: DataTypes.INTEGER },
      vis_km: { type: DataTypes.FLOAT },
      vis_miles: { type: DataTypes.FLOAT },
      gust_mph: { type: DataTypes.FLOAT },
      gust_kph: { type: DataTypes.FLOAT },
      uv: { type: DataTypes.FLOAT },
    },
    { timestamps: true }
  );

  hour.associate = (models) => {
    hour.hasOne(models.condition, { foreignKey: "hourId" });
    hour.belongsTo(models.forecastday, { foreignKey: "forecastdayId" });
  };

  return hour;
};
