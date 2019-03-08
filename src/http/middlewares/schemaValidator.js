const Joi = require('joi');

module.exports = (schema) => {
  return (req, res, next) => {
    const validation = Joi.validate(req, schema, {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: true,
    });

    if (!validation.error) {
      req.joi = {
        body: validation.value.body || {},
        query: validation.value.query || {},
        params: validation.value.params || {},
      };
      next();
    } else {
      res.status(400).send({
        success: false,
        messages: validation.error.details,
      });
    }
  };
};
