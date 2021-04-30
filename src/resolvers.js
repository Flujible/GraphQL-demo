const resolvers = {
  Query: {
    drawCard: (obj, args) => {
      const value = args.value ? args.value : genValue();
      const suit = args.suit ? args.suit : genSuit();

      return value + suit;
    },
    hello: () => "Hello there :)"
  },
};

const genValue = () => {
  const value = Math.floor(Math.random()*13 + 1);

  const mapping = {
    '1': 'A',
    '10':'0',
    '11': 'J',
    '12': 'Q',
    '13': 'K',
  }

  return value >= 10 || value === 1 ? mapping[value] : value.toString();
}

const genSuit = () => {
  const value = Math.floor(Math.random()*4 +1);
  const mapping = {
    '1': 'H',
    '2': 'S',
    '3': 'C',
    '4': 'D'
  }
  return mapping[value];
}

export default resolvers;
