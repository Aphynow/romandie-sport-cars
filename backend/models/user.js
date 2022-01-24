"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      email: {
        type: DataTypes.STRING,
      },

      firstName: {
        type: DataTypes.STRING,
      },

      lastName: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue("password");
        },
        set(value) {
          this.setDataValue("password", bcrypt.hashSync(value, salt));
        },
      },
      brithday: {
        type: DataTypes.DATE,
      },
      avatar: {
        type: DataTypes.TEXT,
      },
      cars: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
