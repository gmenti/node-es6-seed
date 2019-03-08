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
      const rows = await this.settingService.list();
      res.send(rows);
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const { name } = req.joi.params;
      const setting = await this.settingService.get(name);

      if (!setting) {
        throw new NotFound(`Setting #${name} not exists`);
      }
     
      res.send(setting);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = SettingController;
