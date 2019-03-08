const chai = require('chai');
const sinon = require('sinon');
const logger = require('../../src/logger');

logger.pause();

global.expect = chai.expect;
global.sinon = sinon;
