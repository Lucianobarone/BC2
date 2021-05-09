const Package = require('./package.model');
const Passenger = require('./passenger.model');

Passenger.hasMany(Package, { as: 'packages', foreignKey: 'passengerId' });

module.exports = {
  Passenger,
  Package,
};
