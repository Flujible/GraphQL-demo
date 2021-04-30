import { gql } from 'graphql-tag';

const schema = gql`
  enum Suits {
    H
    S
    C
    D
  }

  type Query {
    drawCard(value: Int, suit: Suits): String,
    hello: String,
  }
`;

export default schema;
