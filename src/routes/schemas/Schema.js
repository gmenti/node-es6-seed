const Joi = require('joi');

class Schema {
  static beforeFormat(data) {
    //
  }
  static validate(data, schema) {
    this.beforeFormat(data);

    return Joi.validate(data, schema, {
      abortEarly: false,
      stripUnknown: true,
      allowUnknown: true,
    });
  }
}

module.exports = Schema;