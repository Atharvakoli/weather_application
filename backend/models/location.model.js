module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define(
    "location",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      region: DataTypes.STRING,
      country: DataTypes.STRING,
      lat: DataTypes.FLOAT,
      lon: DataTypes.FLOAT,
      tz_id: DataTypes.STRING,
      localtime_epoch: DataTypes.BIGINT,
      localtime: DataTypes.DATE,
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    { timestamps: true }
  );
  return location;
};
