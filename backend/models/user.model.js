modules.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: String,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: true }
  );

  user.associate = (model) => {
    user.belongsTo(model.location, { foreignKey: "userId" });
  };

  return user;
};
