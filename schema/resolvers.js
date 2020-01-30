const merge = require('lodash.merge');

const files = [
  require('./blueprints/resolver'),
  require('./collection/resolver'),
  require('./squadron/resolver'),
  require('./tournaments/resolver'),
  require('./user/resolver'),
];

files.reduce((all, file) => merge(all, file), module.exports);
