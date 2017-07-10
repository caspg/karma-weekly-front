import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import Router from 'next/router';

import jwtService from 'src/services/jwtService';
import routes from 'src/config/routes';
import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';

import withVerifyJWTMutation from './withVerifyJWTMutation';
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
    submitVerifyJWT: PropTypes.func.isRequired,
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
      Router.replace(routes.home);
    }

    if (!nextProps.isUserLogged && nextState.isValidatingToken) {
      this.handleValidateToken();
    }
  }

  handleValidateToken = async () => {
    const { errorMessage, longLiveJwt } = await this.verifyJWT();

    if (errorMessage) {
      this.setState({ isValidatingToken: false, errorMessage });
      return;
    }

    jwtService.saveInLocal(longLiveJwt);
    Router.replace(routes.dashboard);
  }

  verifyJWT = async () => {
    const token = this.props.url.query.m;

    if (!token) {
      return { errorMessage: 'Looks like url is malformed. Please make sure you\'ve clicked correct link in the email or go to the home page and submit your email address again.' };
    }

    try {
      const { data } = await this.props.submitVerifyJWT(token);
      if (data.verifyJWT.error || !data.verifyJWT.longLiveJwt) {
        return { errorMessage: 'Your magic link is invalid. Probably it already expired. Please go to the home page and submit your email address again.' };
      }

      return { longLiveJwt: data.verifyJWT.longLiveJwt };
    } catch (e) {
      return { errorMessage: 'There was an internal server error. Please go to the home page and submit your email address again.' };
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

export default compose(
  withApollo,
  withLoggedUser,
  withVerifyJWTMutation,
)(MagicLogin);
