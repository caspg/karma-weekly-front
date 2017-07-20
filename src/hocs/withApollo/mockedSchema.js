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

  type AddSubredditResult {
    error: String
    status: Int!
  }

  type RemoveUserResult {
    error: String
    status: Int!
  }

  type RemoveSubredditResult {
    error: String
    status: Int!
  }

  type Query {
    user: User
  }

  type Mutation {
    emailLogin(email: String!): EmailLoginResult
    verifyJWT(token: String!): VerifyJWTResult
    addSubreddit(subreddit: String!): AddSubredditResult
    removeSubreddit(subreddit: String!): RemoveSubredditResult
    removeUser: RemoveUserResult
  }
`;

const subreddits = ['startups', 'poland', 'keyobard', 'gis', 'macbook', 'netflix'];

const user = {
  email: 'some@email.com',
  // email: null,
  subreddits,
};

function timedOutResult(result, timeout = 500) {
  return new Promise((resolve) => {
    setTimeout(() => (
      resolve(result)
    ), timeout);
  });
}

function timedOutError(timeout = 800) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('elo');
    }, timeout);
  });
}

const resolvers = {
  Query: {
    user: () => timedOutResult(user, 1000),
  },
  Mutation: {
    // emailLogin: () => Promise.reject(),
    emailLogin: () => timedOutResult({ error: null, status: 200 }),
    addSubreddit: () => timedOutResult({ error: null, status: 200 }, 1000),
    removeSubreddit: () => timedOutResult({ error: null, status: 200 }, 500),
    removeUser: () => timedOutResult({ error: null, status: 200 }, 800),
    verifyJWT: () => timedOutResult({ error: null, status: 200, longLiveJwt: 'long-live-json-web-token' }),
  },
};

export { typeDefs, resolvers };
