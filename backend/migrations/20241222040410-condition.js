module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("conditions", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      currentId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "currents",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      hourId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "hours",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      dayId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "days",
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
    await queryInterface.dropTable("conditions");
  },
};
