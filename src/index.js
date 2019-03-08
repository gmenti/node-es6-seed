const { settingService } = require('./services');
const http = require('./http');

require('./worker');

setImmediate(async () => {
  debug('Loading settings');
  await settingService.load();

  debug('Starting server');
  http.listen(process.env.PORT, () => {
    debug(`Server started on port ${process.env.PORT}`);
  });
});
