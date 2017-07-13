const typeDefs = `
  type User {
    email: String
    subreddits: [String]
  }

  type EmailLoginResult {
    error: String
    status: Int!
  }

  type VerifyJWTResult {
    error: String
    status: Int!
    longLiveJwt: String
  }

  type Query {
    user: User
  }

  type Mutation {
    emailLogin(email: String!): EmailLoginResult
    verifyJWT(token: String!): VerifyJWTResult
  }
`;

const user = {
  email: 'some@email.com',
  // email: null,
  subreddits: [],
};

function timedOutResult(result) {
  return new Promise((resolve) => {
    setTimeout(() => (
      resolve(result)
    ), 1000);
  });
}

const resolvers = {
  Query: {
    user: () => user,
  },
  Mutation: {
    // emailLogin: () => Promise.reject(),
    emailLogin: () => timedOutResult({ error: null, status: 200 }),
    verifyJWT: () => timedOutResult({ error: null, status: 200, longLiveJwt: 'long-live-json-web-token' }),
  },
};

export { typeDefs, resolvers };
