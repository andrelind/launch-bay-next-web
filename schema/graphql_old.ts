import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoConnection from './connection';
import corsOptions from './cors';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const schema = makeExecutableSchema({ typeDefs, resolvers });

// Define the server (using Express for easier middleware usage)
const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== 'production',
  playground:
    process.env.NODE_ENV !== 'production'
      ? {
          settings: {
            'request.credentials': 'include',
          },
        }
      : false,
});

const app = express();
app.set('trust proxy', true);

const gqlPath = '/api/graphql';
app.use(gqlPath, cors(corsOptions));
app.use(gqlPath, mongoConnection());
server.applyMiddleware({ app, path: '/api/graphql' });

export default app;

export const config = {
  api: {
    bodyParser: false,
  },
};
