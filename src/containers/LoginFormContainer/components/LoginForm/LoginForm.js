import React, { Component } from 'react';

import LoginFormContent from './components/LoginFormContent';

class LoginForm extends Component {
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
    };
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
      validationError: null,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;

    const emailError = LoginForm.validateEmail(email);

    if (emailError) {
      this.setState({ validationError: emailError });
      return;
    }

    console.log('Email submitted: ', email);
    this.setState({ isSending: true });
    // just for now
    setTimeout(() => this.setState({ isSending: false }), 2000);
  }

  render() {
    return (
      <LoginFormContent
        onEamilChange={this.handleEmailChange}
        onSubmit={this.handleSubmit}
        validationError={this.state.validationError}
        isSending={this.state.isSending}
      />
    );
  }
}

export default LoginForm;
