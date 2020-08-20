import { ApolloServer } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import express from 'express';
import minimist from 'minimist';
import mongoose from 'mongoose';
import next from 'next';
import path from 'path';

import { exportAsXws } from './helpers/import+export';
import { deserialize } from './helpers/serializer';
import { loadSquadron } from './helpers/unit';
import setupPassport from './passport/setup';
import schema from './schema';

const parameters = minimist(process.argv.slice(2));
const port = parameters.p || 3000;
const dev = process.env.NODE_ENV !== 'production';
const n = next({ dev });
const handle = n.getRequestHandler();

// Setup mongoose
mongoose.set('useCreateIndex', true);
mongoose.Promise = require('bluebird');
if (process.env.DB_URI) {
  mongoose.connect(process.env.DB_URI).then(() => {
    console.log('Connected to DB');
  });
} else {
  console.warn('No URL provided for database, continuing without...');
}

// Setup GraphQL
const graphQLServer = new ApolloServer({
  schema,
  playground: {
    endpoint: '/graphql',
  },
  // @ts-ignore
  bodyParser: true,
  context: ctx => ctx,
});

// Startup app
n.prepare().then(async () => {
  const app = express();
  app.use(cookieParser());
  app.use(require('body-parser').urlencoded({ extended: true }));
  setupPassport(app);

  graphQLServer.applyMiddleware({ app });

  app.get('/apple-app-site-association', (_, res) => {
    // If Apple doesn't let you version this then I guess it is dangerous to cache
    // Note: /static files don't have cache by default but best to be explicit
    res.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
    res.set('Content-Type', 'application/json');
    const file = path.resolve('./static/apple-app-site-association.json');
    console.log({ file });
    res.sendFile(file);
  });

  app.get('/xws', (req, res) => {
    if (req.query.lbx) {
      const { lbx } = req.query;
      const squadronXws = deserialize(lbx);
      // FIXME!
      // Converts to Squadron just to have it converted back againg
      const squadron = loadSquadron(squadronXws);
      const xws = exportAsXws(squadron);
      res.send(xws);
    }
  });

  app.get('/logout', async (req, res) => {
    req.logOut();
    res.redirect('/');
  });

  app.get('*', async (req, res) => {
    if (
      !req.path.match(/apple-app-site-association/) &&
      !req.path.match(/graphql/)
    ) {
      await handle(req, res);
    }
  });

  app.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
    console.log(
      `> GraphQL Server (And GraphQL Playground) ready at http://localhost:${port}${graphQLServer.graphqlPath}`
    );
  });
});
