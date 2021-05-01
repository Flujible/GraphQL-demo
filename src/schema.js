const { gql } = require('apollo-server');

const typeDefs = gql`
  type Game {
    id: Int!,
    name: String!,
    minPlayers: Int,
    maxPlayers: Int,
    tags: [String]
  }

  type GameUpdateResponse {
    success: Boolean,
    message: String,
    game: Game
  }

  type Query {
    game(id: Int!): Game,
    games: [Game],
    hello: String
  }

  input GameInput {
    id: Int!,
    name: String!
    minPlayers: Int,
    maxPlayers: Int,
    tags: [String]
  }

  type Mutation {
    addGame(game: GameInput!): GameUpdateResponse!,
    removeGame(id: Int!): GameUpdateResponse!,
    updateTags(id: Int!, tags: [String]!, remove: Boolean): GameUpdateResponse!
  }
`;

exports.typeDefs = typeDefs;
