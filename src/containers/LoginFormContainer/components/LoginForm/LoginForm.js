import React, { Component } from 'react';

import LoginFormContent from './LoginFormContent';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted: ', this.state.email);
  }

  render() {
    return (
      <LoginFormContent
        onEamilChange={this.handleEmailChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default LoginForm;
