const UserController = require('../../../src/controllers/UserController');
const UserService = require('../../../src/services/UserService');

describe('UserController tests', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('Should respond with a list of users', (done) => {
    sinon.replace(UserService, 'list', sinon.fake.resolves([{ id: 2 }]));

    const res = {
      status: (httpStatus) => {
        expect(httpStatus).to.be.equal(200);
        return res;
      },
      send: (body) => {
        expect(body.success).to.be.equal(true);
        done();
      },
    };

    UserController.list({}, res);
  });

  it('Should throw error', (done) => {
    sinon.replace(UserService, 'list', sinon.fake.throws(new Error('Failure')));
    const res = {
      status: (httpStatus) => {
        expect(httpStatus).to.be.equal(500);
        return res;
      },
      send: (body) => {
        expect(body.success).to.be.equal(false);
        done();
      },
      __: () => {
        return 'Falha Interna';
      },
    };

    UserController.list({}, res);
  });
});
