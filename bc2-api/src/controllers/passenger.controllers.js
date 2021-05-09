const { Passenger, Package } = require('../models');

module.exports = {
  getAllPassenger: async (req, res, next) => {
    try {
      const allPassenger = await Passenger.findAll({
        where: {
          isCompleted: false,
        },
      });
      res.status(200).json(allPassenger);
    } catch (err) {
      next(err);
    }
  },
  getOnePassenger: async (req, res, next) => {
    const { passengerId } = req.params;
    try {
      const passengerFind = await Passenger.findByPk(passengerId, {
        include: [
          {
            model: Package,
            as: 'packages',
          },
        ],
      });
      if (!passengerFind) {
        throw {
          status: 404,
          message: 'Pasajero no encontrado',
        };
      }
      res.status(200).json(passengerFind);
    } catch (err) {
      next(err);
    }
  },
  createPassenger: async (req, res, next) => {
    const { name, surname, ticketCode } = req.body;
    try {
      if (!name || !surname || !ticketCode || ticketCode.length > 5) {
        throw {
          status: 404,
          message: 'Dato incorrecto o incompleto!',
        };
      }
      await Passenger.findOne({
        where: {
          ticketCode,
        },
      }).then(async (passegerFound) => {
        if (passegerFound) {
          return res.status(400).json({
            message: 'El número de vuelo ingresado ya existe!',
          });
        }
        await Passenger.create({ name, surname, ticketCode });
        return res
          .status(201)
          .json({ message: 'Pasajero creado correctamente' });
      });
    } catch (err) {
      next(err);
    }
  },
  destroyPassenger: async (req, res, next) => {
    const { passengerId } = req.params;
    try {
      const passengerFind = await Passenger.findByPk(passengerId);
      if (!passengerFind) {
        throw {
          status: 404,
          message: 'Pasajero no encontrado',
        };
      }
      passengerFind.isCompleted = true;
      passengerFind.totalPackages = 0;
      await passengerFind.save();

      res.status(200).send({ message: 'Pasajero eliminado correctamente' });
    } catch (err) {
      next(err);
    }
  },
};
