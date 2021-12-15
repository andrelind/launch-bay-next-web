import { ApolloServer } from 'apollo-server-micro';
import { getConnection } from '../../schema/connection';
import resolvers from '../../schema/resolvers';
import typeDefs from '../../schema/typeDefs';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (ctx) => {
    const db = await getConnection();
    return { db, ctx };
  },
  // playground: true,
  introspection: true,
});

export const config = { api: { bodyParser: false } };

export default apolloServer.createHandler({ path: '/api/graphql' });
