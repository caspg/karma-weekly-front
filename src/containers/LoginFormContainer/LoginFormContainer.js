import { gql, graphql } from 'react-apollo';

import LoginForm from './components/LoginForm';

const EMAIL_LOGIN_MUTATION = gql`
  mutation EmailLoginForm($email: String!) {
    emailLogin(email: $email) {
      error
      status
    }
  }
`;

const withEmailLoginMutation = graphql(EMAIL_LOGIN_MUTATION, {
  props: ({ mutate }) => ({
    submitLogin: email => mutate({ variables: { email } }),
  }),
});

export default withEmailLoginMutation(LoginForm);
