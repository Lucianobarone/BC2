const { Passenger, Package } = require('../models');
require('../config/db');
const passengers = require('./passegers.seed');
const packages = require('./packages.seed');

console.log('<<<< SEEDEANDO DATA >>>>');

Passenger.bulkCreate(passengers)
  .then(() => console.log('Pasajeros creados correctamente'))
  .catch((err) => console.log(err));

Package.bulkCreate(packages)
  .then(() => console.log('Paquetes creados correctamente'))
  .catch((err) => console.log(err));
