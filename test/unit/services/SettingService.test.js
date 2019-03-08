const SettingService = require('../../../src/services/SettingService');

describe('Setting service', () => {
  /** @type {SettingService} */
  let settingService;

  const payload = [{ id: 1, name: 'CRON_EVERY_SECOND', type: 'STRING', value: '* * * * * *' }];

  before(async () => {
    settingService = new SettingService({
      settingModel: {
        async all() {
          return payload;
        },
      },
    });

    await settingService.load();
  });

  it('Should check if cache have same length of settings payload', async () => {
    expect(Object.keys(settingService.cache).length).to.be.eql(payload.length);
  });

  it('Should check if CRON_EVERY_SECOND is loaded in cache', async () => {
    expect(settingService.get('CRON_EVERY_SECOND')).to.be.eql('* * * * * *');
  });
});
