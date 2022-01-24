'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    date: DataTypes.DATE,
    where: DataTypes.STRING,
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    img: DataTypes.TEXT,
    register: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};