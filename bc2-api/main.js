const express = require('express');
const morgan = require('morgan');
const db = require('./src/config/db');
const config = require('./src/config/env/env.json');
const APIroutes = require('./src/routes');
const app = express();
const cors = require('cors');
app.use(morgan('dev'));

app.use(
  cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    origin: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* routes
app.use('/api', APIroutes);
app.use('/*', (req, res) => res.redirect('/api'));

//* error middleware
app.use(function (err, req, res, next) {
  res.status(500).send({ message: err });
});

db.sync({ force: false }).then(() => {
  app.listen(config.PORT || 8080, () => {
    console.log(`db connected and server on port ${config.PORT}`);
  });
});
