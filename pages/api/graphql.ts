import { ApolloServer } from 'apollo-server-micro';
import resolvers from '../../schema/resolvers';
import typeDefs from '../../schema/typeDefs';

console.log({ resolvers, typeDefs });

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = { api: { bodyParser: true } };

export default apolloServer.createHandler({ path: '/api/graphql' });
