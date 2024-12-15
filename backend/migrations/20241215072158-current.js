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
        allowNull: true,
      },
      last_updated: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      temp_c: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      temp_f: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      is_day: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      conditionId: {
        type: Sequelize.UUID,
        references: {
          model: "conditions",
          key: "id",
        },
      },
      wind_mph: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      wind_kph: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      wind_degree: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      wind_dir: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pressure_mb: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      pressure_in: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      precip_mm: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      precip_in: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      humidity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      cloud: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      feelslike_c: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      feelslike_f: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      windchill_c: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      windchill_f: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      heatindex_c: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      heatindex_f: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      dewpoint_c: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      dewpoint_f: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      vis_km: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      vis_miles: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      uv: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      gust_mph: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      gust_kph: {
        type: Sequelize.FLOAT,
        allowNull: true,
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
