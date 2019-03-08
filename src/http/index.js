/* .env lib */
require('dotenv').config();
const debug = require('debug')('http');

/* Dependencies */
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const { NotFound } = require('http-errors');
const i18n = require('../i18n');
const { settingService } = require('../services');

/* Routes */
const userRoutes = require('./routes/user');

/* Middlewares */
const errorHandler = require('./middlewares/errorHandler');

/* Express initialization */
const app = express();

/* Express utilites */
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(i18n.init);
app.use(
  bodyParser.json({
    limit: process.env.BODY_LIMIT,
  }),
);

/* Status endpoint */
app.get(['/', '/status'], async (req, res, next) => {
  try {
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

/* Instatiate routes */
app.use('/user', userRoutes);

app.all('*', (req, res, next) => {
  next(new NotFound('Page not found'));
});

app.use(errorHandler);

(async () => {
  debug('Loading settings');
  await settingService.load();

  debug('Starting server');
  app.listen(process.env.PORT, () => {
    debug(`Server started on port ${process.env.PORT}`);
  });
})();

module.exports = app;
