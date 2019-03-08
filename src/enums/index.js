const loadResources = require('../loadResources');

/**
 * @typedef EnumContainer
 * @type {Object}
 * @property {import('./userStatuses')} userStatuses
 */

/**
 * @type {EnumContainer}
 */
const enums = loadResources(__dirname);

module.exports = enums;
