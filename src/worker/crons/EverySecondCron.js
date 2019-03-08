const Cron = require('./Cron');
const logger = require('../../logger');

class EverySecondCron extends Cron {

  runner() {
    logger.info(__('cron.everySecond.tick'));
  }
}

module.exports = EverySecondCron;
