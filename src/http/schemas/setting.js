const Joi = require('joi');

exports.get = Joi.object({
  body: Joi.object({
    name: Joi.string()
      .required()
      .trim(),
  }).required(),
}).required();

