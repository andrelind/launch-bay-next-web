const fs = require("fs");
const path = require("path");
const glob = require("glob");

const files = glob.sync(path.resolve(__dirname, "./**/**.graphql"));

const typeDefs = files.reduce(
  (def, file) => def + fs.readFileSync(file, "utf-8"),
  ""
);
fs.writeFileSync("./schema/typeDefs.js", typeDefs);

// import { gql } from "apollo-server-micro";
// export default gql`

// `
