module.exports = (sequelize, DataTypes) => {
  const Day = sequelize.define(
    "day",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      maxtemp_c: DataTypes.FLOAT,
      maxtemp_f: DataTypes.FLOAT,
      mintemp_c: DataTypes.FLOAT,
      mintemp_f: DataTypes.FLOAT,
      avgtemp_c: DataTypes.FLOAT,
      avgtemp_f: DataTypes.FLOAT,
      maxwind_mph: DataTypes.FLOAT,
      maxwind_kph: DataTypes.FLOAT,
      totalprecip_mm: DataTypes.FLOAT,
      totalprecip_in: DataTypes.FLOAT,
      totalsnow_cm: DataTypes.FLOAT,
      avgvis_km: DataTypes.FLOAT,
      avgvis_miles: DataTypes.FLOAT,
      avghumidity: DataTypes.INTEGER,
      daily_will_it_rain: DataTypes.BOOLEAN,
      daily_chance_of_rain: DataTypes.INTEGER,
      daily_will_it_snow: DataTypes.BOOLEAN,
      daily_chance_of_snow: DataTypes.INTEGER,
      uv: DataTypes.FLOAT,
      forecastdayId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "forecastday",
          key: "id",
        },
      },
    },
    { timestamps: true }
  );

  Day.associate = (models) => {
    Day.hasOne(models.condition, { foreignKey: "dayId" });
    Day.belongsTo(models.forecastday, { foreignKey: "forecastdayId" });
  };

  return Day;
};
