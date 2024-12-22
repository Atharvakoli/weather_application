module.exports = (sequelize, DataTypes) => {
  const condition = sequelize.define(
    "condition",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      text: DataTypes.STRING,
      icon: DataTypes.STRING,
      code: DataTypes.INTEGER,
      currentId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "current",
          key: "id",
        },
      },
      hourId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "hour",
          key: "id",
        },
      },
      dayId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "current",
          key: "id",
        },
      },
    },
    { timestamps: true }
  );

  condition.associate = (models) => {
    condition.belongsTo(models.current, { foreignKey: "currentId" });
    condition.belongsTo(models.day, { foreignKey: "dayId" });
    condition.belongsTo(models.hour, { foreignKey: "hourId" });
  };

  return condition;
};
