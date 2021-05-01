const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema.js').typeDefs;
const resolvers = require('./src/resolvers.js').resolvers;

const server = new ApolloServer({ typeDefs, resolvers});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log("Server listening on port 4001");
});
