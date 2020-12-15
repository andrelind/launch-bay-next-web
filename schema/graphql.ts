import { ApolloServer } from 'apollo-server-micro';

const resolvers = require('./resolvers');
const typeDefs = require('./typeDefs').default;

console.log({ resolvers, typeDefs });

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = { api: { bodyParser: true } };

export default apolloServer.createHandler({ path: '/api/graphql' });
