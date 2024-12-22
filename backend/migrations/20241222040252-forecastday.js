module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("forecastdays", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      date: Sequelize.STRING,
      date_epoch: Sequelize.BIGINT,
      forecastId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "forecasts",
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
    await queryInterface.dropTable("forecastdays");
  },
};
