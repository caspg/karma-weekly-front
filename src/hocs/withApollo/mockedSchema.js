const typeDefs = `
  type User {
    email: String
    subreddits: [String]
  }

  type Query {
    user: User
  }
`;

const user = {
  // email: 'some@email.com',
  email: null,
  subreddits: [],
};

const resolvers = {
  Query: {
    user: () => user,
  },
};

export { typeDefs, resolvers };
