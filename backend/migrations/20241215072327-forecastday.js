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
      dayId: {
        type: Sequelize.UUID,
        references: {
          model: "days",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      astroId: {
        type: Sequelize.UUID,
        references: {
          model: "astros",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      hourId: {
        type: Sequelize.UUID,
        references: {
          model: "hours",
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
