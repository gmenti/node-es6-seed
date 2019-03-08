const { NotFound } = require('http-errors');
const logger = require('../../logger');

module.exports = (err, req, res, next) => {
  if (err instanceof NotFound) {
    return res.status(404).send({ code: 'NOT_FOUND', message: err.message });
  }

  logger.error(err);

  res.status(500).send({ code: 'UNEXPECTED_ERROR', message: 'Unknown err' });
};
