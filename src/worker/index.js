const debug = require('debug')('worker');
const Manager = require('./Manager');
const { settingService } = require('../services');

/* Crons */
const EverySecondCron = require('./crons/EverySecondCron');

debug('Loading settings...');

setImmediate(async () => {
  await settingService.load();
  
  const manager = new Manager([
    new EverySecondCron(settingService.get('CRON_EVERY_SECOND')),
  ]);

  manager.startAll();
  
  debug(`Worker started ${manager.crons.length} services.`);
});
