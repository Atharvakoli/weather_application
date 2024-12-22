module.exports = (sequelize, DataTypes) => {
  const Forecast = sequelize.define(
    "forecast",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  Forecast.associate = (models) => {
    Forecast.hasMany(models.forecastday, { foreignKey: "forecastId" });
  };

  return Forecast;
};
