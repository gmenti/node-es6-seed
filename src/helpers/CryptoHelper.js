const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../env');

class CryptoHelper {
  /**
   * @param {String} password
   * @return {String}
   */
  encryptPassword(password) {
    return crypto.HmacSHA512(password, SECRET).toString();
  }

  /**
   * @param {String} password 
   * @param {String} passwordHash
   * @return {Boolean}
   */
  checkPassword(password, passwordHash) {
    return passwordHash === this.encryptPassword(password);
  }

  /**
   * @param {*} payload
   * @param {import('jsonwebtoken').SignOptions} options
   * @return {String}
   */
  generateToken(payload, options) {
    return jwt.sign(payload, SECRET, options);
  }

  /**
   * @param {String} token
   * @return {*}
   */
  readToken(token) {
    return jwt.decode(token);
  }
}

module.exports = CryptoHelper;
