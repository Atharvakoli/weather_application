module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("currents", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      last_updated_epoch: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      last_updated: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      temp_c: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      temp_f: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      is_day: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wind_mph: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      wind_kph: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      wind_degree: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      wind_dir: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pressure_mb: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      pressure_in: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      precip_mm: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      precip_in: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      humidity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cloud: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      feelslike_c: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      feelslike_f: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      windchill_c: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      windchill_f: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      heatindex_c: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      heatindex_f: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dewpoint_c: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dewpoint_f: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      vis_km: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      vis_miles: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      uv: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      gust_mph: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      gust_kph: {
        type: Sequelize.FLOAT,
        allowNull: false,
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("currents");
  },
};
