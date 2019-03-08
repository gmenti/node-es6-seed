const supertest = require('supertest');
const chai = require('chai');
const chaiHttp = require('chai-http');
const nock = require('nock');
const http = require('../../src/http');
const logger = require('../../src/logger');

logger.pause();

const should = chai.should();

chai.use(chaiHttp);

global.chai = chai;
global.should = should;
global.request = supertest(http);
global.expect = chai.expect;
global.nock = nock;