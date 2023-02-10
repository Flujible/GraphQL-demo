const { gql } = require('apollo-server');

// The schema defines the structure of the data in the graph
// Schemas can be created in a bespoke graphql file or can be created in JS files using the 'gql' string literal
// Custom types can be made using the 'type' keyword
// Queries (for fetching data) are defined as 'type Query'
// Mutations (updating, adding, removing data) are defined as 'type Mutation'
const typeDefs = gql`
  type Game {
    id: Int!
    name: String!
    minPlayers: Int
    maxPlayers: Int
    tags: [String]
  }

  # Each query is one key:value pair in the 'type Query' object
  # Queries can take parmeters defined as per the 'game' query
  # The 'key' of the key:value pair is the query name
  # The 'value' of the key:value pair defines the type that the query will return
  type Query {
    hello: String
    game(id: Int!): Game
    games: [Game]
  }

  # The 'input' type is used when a non standard type is needed for arguments in mutation calls
  input GameInput {
    id: Int!
    name: String!
    minPlayers: Int
    maxPlayers: Int
    tags: [String]
  }

  # This defines the shape of the responses from mutations
  type GameUpdateResponse {
    success: Boolean
    message: String
    game: Game
  }

  # Mutations, much like queries, define a mutation name, arguments, and a response type
  type Mutation {
    addGame(game: GameInput!): GameUpdateResponse!
    removeGame(id: Int!): GameUpdateResponse!
    updateTags(id: Int!, tags: [String]!, remove: Boolean): GameUpdateResponse!
  }
`;

// We export the schema created above so it can be imported in other files
exports.typeDefs = typeDefs;
