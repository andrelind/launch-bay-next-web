const { makeExecutableSchema } = require('graphql-tools');
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const resolvers = require('./resolvers');

const files = glob.sync(path.resolve(__dirname, './**/**.graphql'));

const typeDefs = files.reduce(
  (def, file) => def + fs.readFileSync(file, 'utf-8'),
  ''
);

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});
