const { NotFound } = require('http-errors');

class SettingController {
  /**
   * @param {import('../../services').ServiceContainer} param0
   */
  constructor({ settingService }) {
    this.settingService = settingService;
  }

  async list(req, res, next) {
    try {
      res.send(this.settingService.cache);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SettingController;
