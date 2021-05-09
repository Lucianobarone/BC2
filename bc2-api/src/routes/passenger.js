const router = require('express').Router();
const controllers = require('../controllers/passenger.controllers');

router.get('/', controllers.getAllPassenger);

router.post('/', controllers.createPassenger);

router.get('/:passengerId', controllers.getOnePassenger);

router.delete('/:passengerId', controllers.destroyPassenger);

module.exports = router;
