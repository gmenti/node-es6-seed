class UserService {
  /**
   * @param {import('./index').ModelContainer} param0
   */
  constructor({ userModel }) {
    this.model = userModel;
  }

  list() {
    return this.model.all();
  }
}

module.exports = UserService;
