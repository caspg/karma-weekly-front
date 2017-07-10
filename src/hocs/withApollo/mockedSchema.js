const typeDefs = `
  type User {
    email: String
    subreddits: [String]
  }

  type EmailLoginResult {
    error: String
    status: Int!
  }

  type Query {
    user: User
  }

  type Mutation {
    emailLogin(email: String!): EmailLoginResult
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
  Mutation: {
    emailLogin: () => new Promise((resolve) => {
      setTimeout(() => (
        resolve({ error: null, status: 200 })
        // resolve({ error: 'some server error', status: 500 })
      ), 1000);
    }),
  },
};

export { typeDefs, resolvers };
