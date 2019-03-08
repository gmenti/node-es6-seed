const knex = require('knex');
const path = require('path');
const knexFile = require('../../knexfile');
const logger = require('../logger');
const loadResources = require('../loadResources');

const database = knex(knexFile);

database.on('query', (query) => {
  let sql = query.sql;
  if (query.bindings) {
    query.bindings.forEach((binding) => {
      sql = sql.replace('?', binding);
    });
  }
  logger.info(sql);
});

/**
 * @typedef ModelContainer
 * @type {Object}
 * @property {import("../models/UserModel")} userModel
 * @property {import("../models/SettingModel")} settingModel
 */

/**
 * @typedef ServiceContainer
 * @type {Object}
 * @property {import("./UserService")} userService
 * @property {import("./SettingService")} settingService
 */

/**
 * @type {ModelContainer}
 */
const models = loadResources(path.join(__dirname, '../models'), (Model) => new Model(database));

/**
 * @type {ServiceContainer}
 */
const services = loadResources(__dirname, (Service) => new Service(models));

module.exports = services;
