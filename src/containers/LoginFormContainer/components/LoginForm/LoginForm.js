import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginFormContent from './components/LoginFormContent';

class LoginForm extends Component {
  static propTypes = {
    submitLogin: PropTypes.func.isRequired,
  }

  static validateEmail(email) {
    if (!email) {
      return 'Email can\'t be blank';
    }

    const simpleEmailRegex = /\S+@\S+\.\S+/;

    if (!simpleEmailRegex.test(email)) {
      return 'Email looks invalid';
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isSending: false,
      isLoginSuccess: false,
      error: null,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value, error: null });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ error: null });

    const { email } = this.state;
    const emailError = LoginForm.validateEmail(email);

    if (emailError) {
      const error = { body: emailError };
      this.setState({ error });
      return;
    }

    this.submitEmail();
  }

  submitEmail = () => {
    this.setState({ isSending: true });

    const handleSuccess = () => { this.setState({ isLoginSuccess: true, isSending: false }); };
    const handleError = () => {
      const error = {
        title: 'There was an internal server error.',
        body: 'Please try again later.',
      };
      this.setState({ isSending: false, error });
    };

    this.props.submitLogin(this.state.email)
      .then(handleSuccess)
      .catch(handleError);
  }

  render() {
    return (
      <LoginFormContent
        onEamilChange={this.handleEmailChange}
        onSubmit={this.handleSubmit}
        isSending={this.state.isSending}
        isLoginSuccess={this.state.isLoginSuccess}
        emailValue={this.state.email}
        error={this.state.error}
      />
    );
  }
}

export default LoginForm;
