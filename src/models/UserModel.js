const Model = require('./Model');
const { cryptoHelper } = require('../helpers');

/**
 * @typedef User
 * @type {Object}
 * @property {String} id
 * @property {String} fullName
 * @property {String} emailAddress
 * @property {String} phoneNumber
 * @property {String} documentNumber
 * @property {String} passwordHash
 * @property {Date} passwordChangedAt
 * @property {String} status
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @extends {Model<User>}
 */
class UserModel extends Model {
  constructor(database) {
    super(database, 'user');
  }

  /**
   * @param {Object} identifiers
   * @return {import('./Model').ResultTransaction<User>}
   */
  getByPasswordAndIdentifiers(password, identifiers) {
    return this.table
      .where(identifiers)
      .where('passwordHash', cryptoHelper.encryptPassword(password))
      .first();
  } 
}

module.exports = UserModel;
