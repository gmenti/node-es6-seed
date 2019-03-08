const SettingController = require('../../../../src/http/controllers/SettingController');

describe('Setting controller', () => {
  /** @type {SettingController} */
  let settingController;

  const payload = {
    CRON_EVERY_SECOND: '* * * * * *',
  };

  before(() => {
    settingController = new SettingController({
      settingService: {
        cache: { ...payload },
      },
    });
  });

  it('Should respond with all cached settings', async () => {
    await settingController.list(
      {},
      {
        status: (httpStatus) => {
          expect(httpStatus).to.be.equal(200);
          return res;
        },
        send: (body) => {
          expect(body.CRON_EVERY_SECOND).to.be.equal(payload.CRON_EVERY_SECOND);
        },
      },
      (err) => {
        if (err) {
          throw err;
        }
      },
    );
  });
});
