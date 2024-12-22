module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("days", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      maxtemp_c: Sequelize.FLOAT,
      maxtemp_f: Sequelize.FLOAT,
      mintemp_c: Sequelize.FLOAT,
      mintemp_f: Sequelize.FLOAT,
      avgtemp_c: Sequelize.FLOAT,
      avgtemp_f: Sequelize.FLOAT,
      maxwind_mph: Sequelize.FLOAT,
      maxwind_kph: Sequelize.FLOAT,
      totalprecip_mm: Sequelize.FLOAT,
      totalprecip_in: Sequelize.FLOAT,
      totalsnow_cm: Sequelize.FLOAT,
      avgvis_km: Sequelize.FLOAT,
      avgvis_miles: Sequelize.FLOAT,
      avghumidity: Sequelize.INTEGER,
      daily_will_it_rain: Sequelize.BOOLEAN,
      daily_chance_of_rain: Sequelize.INTEGER,
      daily_will_it_snow: Sequelize.BOOLEAN,
      daily_chance_of_snow: Sequelize.INTEGER,
      uv: Sequelize.FLOAT,
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
    await queryInterface.dropTable("days");
  },
};
