import { ApolloServer } from "apollo-server-micro";

const resolvers = require("../../schema/resolvers");
const typeDefs = require("../../schema/typeDefs");

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: true,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
