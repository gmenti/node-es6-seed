const { CronJob } = require('cron');

class Cron extends CronJob {

  constructor(timer) {
    super(timer, () => this.runner(), null, false, 'Etc/UTC');
  }

  runner() {
    //
  }
}

module.exports = Cron;
