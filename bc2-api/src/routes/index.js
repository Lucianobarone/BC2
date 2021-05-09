const router = require('express').Router();

//* imports routes
const passengersRoutes = require('./passenger');
const packagesRoutes = require('./package');

//* routes
router.use('/passengers', passengersRoutes);
router.use('/packages', packagesRoutes);

//* error route
router.use('/', (_req, res) => {
  res.sendStatus(404);
});

module.exports = router;
