import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoConnection from '../../schema/connection';
import corsOptions from '../../schema/cors';
import resolvers from '../../schema/resolvers';
import typeDefs from '../../schema/typeDefs';

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
// setup cors
app.use(gqlPath, cors(corsOptions));
// init the db
app.use(gqlPath, mongoConnection());

server.applyMiddleware({ app, path: '/api/graphql' });

export default app;

export const config = {
  api: {
    bodyParser: false,
  },
};
