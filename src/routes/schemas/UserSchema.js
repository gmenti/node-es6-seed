const Joi = require('joi');
const Schema = require('./Schema');

class UserSchema extends Schema {

  static get(data) {
    const schema = {
      params: Joi.object().keys({
        userId: Joi.number().integer().required(),
      }),
    };

    return this.validate(data, schema);
  }

  static list(data) {
    const schema = {};

    return this.validate(data, schema);
  }

  static post(data) {
    const schema = {
      body: Joi.object().keys({
        name: Joi.string().required(),
      }),
    };

    return this.validate(data, schema);
  }

  static put(data) {
    const schema = {
      params: Joi.object().keys({
        userId: Joi.number().integer().required(),
      }),
      body: Joi.object().keys({
        name: Joi.string().required(),
      }),
    };

    return this.validate(data, schema);
  }

  static delete(data) {
    const schema = {
      params: Joi.object().keys({
        userId: Joi.number().integer().required(),
      }),
    };

    return this.validate(data, schema);
  }

}

module.exports = UserSchema;
