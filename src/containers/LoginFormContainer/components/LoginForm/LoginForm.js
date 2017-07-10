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
      validationError: null,
      isSending: false,
      isLoginSuccess: false,
      isServerError: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value, validationError: null });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isServerError: false });

    const { email } = this.state;
    const emailError = LoginForm.validateEmail(email);

    if (emailError) {
      this.setState({ validationError: emailError });
      return;
    }

    this.submitEmail();
  }

  submitEmail = () => {
    this.setState({ isSending: true });

    const handleSuccess = () => { this.setState({ isLoginSuccess: true, isSending: false }); };
    const handleError = () => { this.setState({ isSending: false, isServerError: true }); };

    this.props.submitLogin(this.state.email)
      .then(handleSuccess)
      .catch(handleError);
  }

  render() {
    return (
      <LoginFormContent
        onEamilChange={this.handleEmailChange}
        onSubmit={this.handleSubmit}
        validationError={this.state.validationError}
        isSending={this.state.isSending}
        isLoginSuccess={this.state.isLoginSuccess}
        isServerError={this.state.isServerError}
        emailValue={this.state.email}
      />
    );
  }
}

export default LoginForm;
