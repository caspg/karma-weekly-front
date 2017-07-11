import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';

import jwtService from 'src/services/jwtService';
import { typeDefs, resolvers } from './mockedSchema';

function createMockedNetworkInterface() {
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  addMockFunctionsToSchema({ schema, preserveResolvers: true });

  return mockNetworkInterfaceWithSchema({ schema });
}

function makeNetworkInterface() {
  const graphqlUri = process.env.GRAPHQL_URI;

  if (!graphqlUri) {
    throw Error('GRAPHQL_URI env variable must be provided');
  }

  const networkInterface = createNetworkInterface({ uri: graphqlUri });

  networkInterface.use([{
    applyMiddleware: (req, next) => {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      const token = jwtService.getFromLocal();
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    },
  }]);

  return networkInterface;
}

function createApolloClient() {
  const networkInterface = (process.env.MOCK_APOLLO === 'true') ?
    createMockedNetworkInterface() :
    makeNetworkInterface();

  return new ApolloClient({
    ssrMode: false, // apollo will be running only in a browser
    networkInterface,
  });
}

let apolloClient = null;

function initApollo() {
  // Reuse apollo client on clien-side
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }

  return apolloClient;
}

export default initApollo;
