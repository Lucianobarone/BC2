const Sequelize = require('sequelize');
const db = require('../config/db');

class Package extends Sequelize.Model {}
Package.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    typeName: {
      type: Sequelize.ENUM('Grandes', 'Pequeños', 'Prendas'),
      allowNull: false,
    },
    isGarment: {
      type: Sequelize.STRING,
      unique: true,
    },
  },
  { sequelize: db, modelName: 'package' },
);

module.exports = Package;
