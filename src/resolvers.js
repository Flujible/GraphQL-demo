const gameData = require('../data/games.json');

// Resolvers are the counter parts to the schema queries and mutations
// The schema defines what queries can be made and the resolvers define what happens when those queries are run
const resolvers = {
  // The structure of a resolver is to have the query name as the key, and the function to be executed when the
  // query is received as the value. The `hello` query here simply returns the string "Hello there :)"
  // Queries are the client asking for data, so the resolvers should return some data
  // When a query takes an argument, its resolver always takes 2 arguments (no matter how many args are passed into
  // the query). The arguments passed into the query are found in the args object
  Query: {
    hello: () => "Hello there :)",
    game: (obj, args) => findGame(args.id),
    games: (obj, args) => gameData.games,
  },
  // The structure of a mutation is the same as a query. The function executed should update the data.
  Mutation: {
    addGame: (obj, args) => addGame(args.game),
    removeGame: (obj, args) => removeGame(args.id),
    updateTags: (obj, args) => updateGameTags(args.id, args.tags, args.remove)
  }
};

const findGame = (id) => {
  return gameData.games.filter(id => game.id === id);
}

const addGame = (game) => {
  const newGame = {
    id: game.id,
    name: game.name,
    minPlayers: game.minPlayers,
    maxPlayers: game.maxPlayers,
    tags: game.tags
  };

  gameData.games.push(newGame);

  return {
    success: true,
    message: "Successfully added game",
    game: newGame
  };
}

const removeGame = (id) => {
  const index = gameData.games.findIndex(game => game.id === id);
  gameData.games.splice(index, 1);
}

const updateGameTags = (id, tags, remove) => {
  const game = gameData.games.find(game => game.id === id);

  if (!remove) {
    tags.forEach(tag => {
      game.tags.push(tag);
    });
  } else {
    const index = game.tags.findIndex(tag => tag === tag);
    game.tags.splice(index, 1);
  }

  return {
    success: true,
    message: "Successfully updated tags",
    game
  }
}

exports.resolvers = resolvers;
