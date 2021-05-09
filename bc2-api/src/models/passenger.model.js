const Sequelize = require('sequelize');
const db = require('../config/db');

class Passenger extends Sequelize.Model {}
Passenger.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ticketCode: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      isAlphanumeric: true,
    },
    totalPackages: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    isCompleted: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: 'passenger' },
);

module.exports = Passenger;
