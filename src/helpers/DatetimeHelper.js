const moment = require('moment-timezone');

class DatetimeHelper {
  toUnixEpoch(dateString) {
    return moment.utc(dateString).valueOf();
  }
}

module.exports = DatetimeHelper;
