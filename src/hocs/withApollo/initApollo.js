import { ApolloClient, createNetworkInterface } from 'react-apollo';

function createApolloClient() {
  const graphqlUri = process.env.GRAPHQL_URI;

  if (!graphqlUri) {
    throw Error('GRAPHQL_URI env variable must be provided');
  }

  return new ApolloClient({
    ssrMode: false, // apollo will be running only in a browser
    networkInterface: createNetworkInterface({
      uri: graphqlUri,
    }),
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
