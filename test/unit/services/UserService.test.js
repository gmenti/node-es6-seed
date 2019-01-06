const UserService = require('../../../src/services/UserService');
const UserModel = require('../../../src/models/UserModel');


describe('UserService Tests', () => {

  afterEach(() => {
    sinon.restore();
  });

  it('Should return a list of users', async () => {
    sinon.replace(UserModel, 'list', sinon.fake.resolves([{ id: 1 }]));

    const users = await UserService.list();
    expect(users.length).to.equal(1);
    expect(users[0].id).to.equal(1);
    expect(users[0]).to.have.property('createdAt');
    expect(users[0]).to.have.property('updatedAt');
    expect(users[0]).to.have.property('deletedAt');
  });
});
