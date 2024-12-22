module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("astros", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      sunrise: Sequelize.STRING,
      sunset: Sequelize.STRING,
      moonrise: Sequelize.STRING,
      moonset: Sequelize.STRING,
      moon_phase: Sequelize.STRING,
      moon_illumination: Sequelize.INTEGER,
      is_moon_up: Sequelize.BOOLEAN,
      is_sun_up: Sequelize.BOOLEAN,
      forecastdayId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "forecastdays",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("astros");
  },
};
