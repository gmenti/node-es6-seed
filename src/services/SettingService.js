const { settingTypes } = require('../enums');

class SettingService {
  /**
   * @param {import('./index').ModelContainer} param0
   */
  constructor({ settingModel }) {
    this.model = settingModel;
    this.cache = {};
  }

  async load() {
    const settings = await this.model.all();

    const data = {};
    settings.forEach((setting) => {
      const { name, type, value } = setting;
      switch (type) {
        case settingTypes.NUMBER:
          data[name] = parseInt(value, 10);
          break;

        case settingTypes.FLOAT:
          data[name] = parseFloat(value);
          break;

        case settingTypes.STRING:
          data[name] = String(value);
          break;

        case settingTypes.BOOLEAN:
          data[name] = value === 'true';
          break;

        case settingTypes.OBJECT:
          try {
            data[name] = JSON.parse(value);
          } catch (err) {
            data[name] = null;
          }
          break;

        default:
          data[name] = null;
          break;
      }
    });

    this.cache = data;
  }

  /**
   * @param {String} name
   * @return {*}
   */
  get(name) {
    return this.cache[name];
  }
}

module.exports = SettingService;
