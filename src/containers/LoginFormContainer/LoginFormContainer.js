import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import LoginForm from './components/LoginForm';

class LoginFormContainer extends Component {
  static propTypes = {
    submitLogin: PropTypes.func.isRequired,
  }

  handleSubmitLogin = async (email) => {
    const { data } = await this.props.submitLogin(email);

    if (!data || data.emailLogin.error) {
      throw Error(data.emailLogin.error);
    }
  }

  render() {
    return (
      <LoginForm submitLogin={this.handleSubmitLogin} />
    );
  }
}

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

export default withEmailLoginMutation(LoginFormContainer);
