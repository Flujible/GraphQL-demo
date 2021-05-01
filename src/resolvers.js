const gameData = require('../data/games.json');

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

const resolvers = {
  Query: {
    hello: () => "Hello there :)",
    game: (obj, args) => {
      return findGame(args.id);
    },
    games: (obj, args) => {
      return gameData.games;
    },
  },
  Mutation: {
    addGame: (obj, args) => addGame(args.game),
    removeGame: (obj, args) => removeGame(args.id),
    updateTags: (obj, args) => updateGameTags(args.id, args.tags, args.remove)
  }
};

exports.resolvers = resolvers;
