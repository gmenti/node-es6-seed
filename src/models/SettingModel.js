const Model = require('./Model');

/**
 * @typedef Setting
 * @type {Object}
 * @property {String} id
 * @property {String} name
 * @property {String} type
 * @property {String} value
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @extends {Model<Setting>}
 */
class SettingModel extends Model {
  constructor(database) {
    super(database, 'settings');
  } 
}

module.exports = SettingModel;
