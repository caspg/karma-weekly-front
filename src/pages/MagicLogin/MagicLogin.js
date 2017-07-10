import React, { Component } from 'react';
import PropTypes from 'prop-types';

import routes from 'src/config/routes';
import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';

import MagicLoginView from './components/MagicLoginView';

class MagicLogin extends Component {
  static propTypes = {
    isLoadingUser: PropTypes.bool.isRequired,
    isUserLogged: PropTypes.bool.isRequired,
    url: PropTypes.shape({
      replace: PropTypes.func.isRequired,
      query: PropTypes.shape({
        m: PropTypes.string,
      }),
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isValidatingToken: true,
      errorMessage: '',
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.isLoadingUser) return;

    if (nextProps.isUserLogged) {
      this.props.url.replace(routes.home);
    }

    if (!nextProps.isUserLogged && nextState.isValidatingToken) {
      this.validateToken();
    }
  }

  validateToken = () => {
    const token = this.props.url.query.m;

    if (!token) {
      const errorMessage = 'Looks like url is malformed. Please make sure you clicked correct link in the email or go to the home page and submit your email address again.';
      this.setState({ isValidatingToken: false, errorMessage });
    }
  }

  render() {
    return (
      <MagicLoginView
        isValidatingToken={this.state.isValidatingToken}
        errorMessage={this.state.errorMessage}
      />
    );
  }
}

export default withApollo(
  withLoggedUser(MagicLogin)
);
