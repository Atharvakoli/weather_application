module.exports = (sequelize, DataTypes) => {
  const current = sequelize.define(
    "current",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      last_updated_epoch: DataTypes.BIGINT,
      last_updated: DataTypes.DATE,
      temp_c: DataTypes.FLOAT,
      temp_f: DataTypes.FLOAT,
      is_day: DataTypes.INTEGER,
      wind_mph: DataTypes.FLOAT,
      wind_kph: DataTypes.FLOAT,
      wind_degree: DataTypes.INTEGER,
      wind_dir: DataTypes.STRING,
      pressure_mb: DataTypes.FLOAT,
      pressure_in: DataTypes.FLOAT,
      precip_mm: DataTypes.FLOAT,
      precip_in: DataTypes.FLOAT,
      humidity: DataTypes.INTEGER,
      cloud: DataTypes.INTEGER,
      feelslike_c: DataTypes.FLOAT,
      feelslike_f: DataTypes.FLOAT,
      windchill_c: DataTypes.FLOAT,
      windchill_f: DataTypes.FLOAT,
      heatindex_c: DataTypes.FLOAT,
      heatindex_f: DataTypes.FLOAT,
      dewpoint_c: DataTypes.FLOAT,
      dewpoint_f: DataTypes.FLOAT,
      vis_km: DataTypes.FLOAT,
      vis_miles: DataTypes.FLOAT,
      uv: DataTypes.FLOAT,
      gust_mph: DataTypes.FLOAT,
      gust_kph: DataTypes.FLOAT,
    },
    { timestamps: true }
  );

  current.associate = (models) => {
    current.hasOne(models.condition, { foreignKey: "currentId" });
  };

  return current;
};
