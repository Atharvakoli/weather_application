module.exports = (sequelize, DataTypes) => {
  const Forecastday = sequelize.define(
    "forecastday",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      date: DataTypes.STRING,
      date_epoch: DataTypes.BIGINT,
      forecastId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "forecast",
          key: "id",
        },
      },
    },
    { timestamps: true }
  );

  Forecastday.associate = (models) => {
    Forecastday.belongsTo(models.forecast, { foreignKey: "forecastId" });
    Forecastday.hasOne(models.day, { foreignKey: "forecastdayId" });
    Forecastday.hasOne(models.astro, { foreignKey: "forecastdayId" });
    Forecastday.hasMany(models.hour, { foreignKey: "forecastdayId" });
  };

  return Forecastday;
};
