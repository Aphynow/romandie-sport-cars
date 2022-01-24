"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },

      password: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },

      lastName: {
        type: Sequelize.STRING,
      },
      admin: {
        type: Sequelize.BOOLEAN,
      },
      brithday: {
        type: Sequelize.DATE,
      },
      avatar: {
        type: Sequelize.TEXT,
      },
      cars: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
