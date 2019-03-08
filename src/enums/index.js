const loadResources = require('../loadResources');

/**
 * @typedef EnumContainer
 * @type {Object}
 * @property {import('./settingTypes')} settingTypes
 */

/**
 * @type {EnumContainer}
 */
const enums = loadResources(__dirname);

module.exports = enums;
