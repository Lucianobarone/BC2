const { Package, Passenger } = require('../models');

module.exports = {
  createPackage: async (req, res, next) => {
    const { passengerId, name, typeName } = req.body;
    try {
      const passengerFind = await Passenger.findByPk(passengerId);
      if (!passengerFind) {
        throw {
          status: 404,
          message: 'Pasajero no encontrado',
        };
      }
      if (passengerFind.totalPackages >= 3) {
        throw {
          status: 404,
          message: 'Pasajero excede el limite de bultos permitido !',
        };
      }
      const packageCreate = await Package.create({
        passengerId,
        name,
        typeName,
      });

      if (typeName === 'Prendas') {
        packageCreate.isGarment = Math.floor(Math.random() * 90000) + 10000;
        await packageCreate.save();
      }
      passengerFind.totalPackages = passengerFind.totalPackages + 1;
      await passengerFind.save();
      
      res.status(201).send({ message: 'Bulto creado correctamente' });
    } catch (err) {
      return next(err);
    }
  },
};
