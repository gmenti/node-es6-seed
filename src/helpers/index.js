const loadResources = require('../loadResources');

/**
 * @typedef HelperContainer
 * @type {Object}
 * @property {import("./CryptoHelper")} cryptoHelper
 * @property {import("./DatetimeHelper")} datetimeHelper
 * @property {import("./KnexHelper"} knexHelper
 */

/**
 * @type {HelperContainer}
 */
const helpers = loadResources(__dirname, (Helper) => new Helper());

module.exports = helpers;
