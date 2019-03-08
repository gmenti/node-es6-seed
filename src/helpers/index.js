const loadResources = require('../loadResources');

/**
 * @typedef HelperContainer
 * @type {Object}
 * @property {import("./CryptoHelper")} cryptoHelper
 * @property {import("./DatetimeHelper")} datetimeHelper
 */

/**
 * @type {HelperContainer}
 */
const helpers = loadResources(__dirname, (Helper) => new Helper());

module.exports = helpers;
