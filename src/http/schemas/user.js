const Joi = require('joi');

exports.create = Joi.object({
  body: Joi.object({
    name: Joi.string()
      .required()
      .trim(),
  }).required(),
}).required();

exports.get = Joi.object({
  params: Joi.object({
    id: Joi.number()
      .integer()
      .required(),
  }).required(),
}).required();

exports.update = Joi.object({
  params: Joi.object({
    userId: Joi.number()
      .integer()
      .required(),
  }).required(),
  body: Joi.object({
    name: Joi.string()
      .trim()
      .required(),
  }).required(),
});

exports.delete = Joi.object({
  params: Joi.object({
    id: Joi.number()
      .integer()
      .required(),
  }),
}).required();
