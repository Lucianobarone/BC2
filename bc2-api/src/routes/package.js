const router = require('express').Router();
const controllers = require('../controllers/package.controllers');

router.post('/', controllers.createPackage);

module.exports = router;
