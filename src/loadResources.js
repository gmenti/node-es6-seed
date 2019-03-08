const fs = require('fs');
const path = require('path');

const classNameToVarName = (className) =>
  className.substr(0, 1).toLowerCase() + className.substr(1);

module.exports = (location, cb, format = true) => {
  const files = fs.readdirSync(location);
  const filesToIgnore = ['index.js'];

  const resources = {};
  
  files
    .filter((file) => !filesToIgnore.includes(file))
    .forEach((file) => {
      const Resource = require(path.join(location, file));
      const className = file.replace('.js', '');
      const key = format ? classNameToVarName(className) : className;

      if (cb) {
        resources[key] = cb(Resource);
      } else {
        resources[key] = Resource;
      }
    });

  return resources;
};
