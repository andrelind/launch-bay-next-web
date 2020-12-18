import merge from 'lodash.merge';

const files = [
  require('./blueprints/resolver'),
  require('./collection/resolver'),
  require('./squadron/resolver'),
  require('./tournaments/resolver'),
  require('./user/resolver'),
];

export default files.reduce((all, file) => merge(all, file));

// files.reduce((all, file) => merge(all, file), module.exports);
