module.exports = (sequelize, DataTypes) => {
  const astro = sequelize.define(
    "astro",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      sunrise: { type: DataTypes.STRING },
      sunset: { type: DataTypes.STRING },
      moonrise: { type: DataTypes.STRING },
      moonset: { type: DataTypes.STRING },
      moon_phase: { type: DataTypes.STRING },
      moon_illumination: { type: DataTypes.INTEGER },
      is_moon_up: { type: DataTypes.BOOLEAN },
      is_sun_up: { type: DataTypes.BOOLEAN },
      forecastdayId: {
        type: DataTypes.UUID,
        references: {
          model: "forecastday",
          key: "id",
        },
      },
    },
    { timestamps: true }
  );
  astro.associate = (models) => {
    astro.belongsTo(models.forecastday, { foreignKey: "forecastdayId" });
  };
  return astro;
};
