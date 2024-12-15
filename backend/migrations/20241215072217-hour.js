module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("hours", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      time_epoch: Sequelize.INTEGER,
      time: Sequelize.STRING,
      temp_c: Sequelize.FLOAT,
      temp_f: Sequelize.FLOAT,
      is_day: Sequelize.BOOLEAN,
      wind_mph: Sequelize.FLOAT,
      wind_kph: Sequelize.FLOAT,
      wind_degree: Sequelize.INTEGER,
      wind_dir: Sequelize.STRING,
      pressure_mb: Sequelize.FLOAT,
      pressure_in: Sequelize.FLOAT,
      precip_mm: Sequelize.FLOAT,
      precip_in: Sequelize.FLOAT,
      snow_cm: Sequelize.FLOAT,
      humidity: Sequelize.INTEGER,
      cloud: Sequelize.INTEGER,
      feelslike_c: Sequelize.FLOAT,
      feelslike_f: Sequelize.FLOAT,
      windchill_c: Sequelize.FLOAT,
      windchill_f: Sequelize.FLOAT,
      heatindex_c: Sequelize.FLOAT,
      heatindex_f: Sequelize.FLOAT,
      dewpoint_c: Sequelize.FLOAT,
      dewpoint_f: Sequelize.FLOAT,
      will_it_rain: Sequelize.BOOLEAN,
      chance_of_rain: Sequelize.INTEGER,
      will_it_snow: Sequelize.BOOLEAN,
      chance_of_snow: Sequelize.INTEGER,
      vis_km: Sequelize.FLOAT,
      vis_miles: Sequelize.FLOAT,
      gust_mph: Sequelize.FLOAT,
      gust_kph: Sequelize.FLOAT,
      uv: Sequelize.FLOAT,
      conditionId: {
        type: Sequelize.UUID,
        references: {
          model: "conditions",
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
    await queryInterface.dropTable("hours");
  },
};
