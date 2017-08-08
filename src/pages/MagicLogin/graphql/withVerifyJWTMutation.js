import { gql, graphql } from 'react-apollo';

const VERIFY_JWT_MUTATION = gql`
  mutation VerifyJWT($token: String!) {
    verifyJWT(token: $token) {
      error
      status
      longLiveJwt
    }
  }
`;

const withVerifyJWTMutation = graphql(VERIFY_JWT_MUTATION, {
  props: ({ mutate }) => ({
    submitVerifyJWT: token => mutate({ variables: { token } }),
  }),
});

export default withVerifyJWTMutation;
