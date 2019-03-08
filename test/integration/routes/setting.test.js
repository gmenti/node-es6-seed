const { settingService } = require('../../../src/services');

describe('Settings routes', () => {
  before(async () => {
    await settingService.load();
  });

  it('shoudl return all cached settings', async () => {
    const res = await request.get('/settings');
    expect(res.body).to.be.eql({
      CRON_EVERY_SECOND: '* * * * * *',
    });
  });
});
