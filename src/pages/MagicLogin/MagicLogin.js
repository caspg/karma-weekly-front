import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import Router from 'next/router';

import jwtService from 'src/services/jwtService';
import routes from 'src/config/routes';
import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';
import withFlashMessages from 'src/hocs/withFlashMessages';

import withVerifyJWTMutation from './withVerifyJWTMutation';
import MagicLoginView from './components/MagicLoginView';

function createErrorMessageObject(title, body) {
  return { id: Date.now(), type: 'alert', title, body };
}

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
    addFlashMessage: PropTypes.func.isRequired,
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
      Router.replace(routes.dashboard);
    }

    if (!nextProps.isUserLogged && nextState.isValidatingToken) {
      this.handleValidateToken();
    }
  }

  handleValidateToken = async () => {
    const { errorMessage, longLiveJwt } = await this.verifyJWT();

    this.setState({ isValidatingToken: false }, () => {
      if (errorMessage) {
        this.props.addFlashMessage(errorMessage);
        Router.replace(routes.home);

        return;
      }

      jwtService.saveInLocal(longLiveJwt);
      Router.replace(routes.dashboard);
    });
  }

  verifyJWT = async () => {
    const token = this.props.url.query.m;

    if (!token) {
      const errorMessage = createErrorMessageObject(
        'Looks like magic link is malformed',
        'Please make sure you\'ve clicked correct link in the email or submit your email address again.',
      );

      return { errorMessage };
    }

    try {
      const { data } = await this.props.submitVerifyJWT(token);
      if (data.verifyJWT.error || !data.verifyJWT.longLiveJwt) {
        const errorMessage = createErrorMessageObject(
          'Your magic link is invalid',
          'Probably your magic link is already expired. Please submit your email address again.'
        );

        return { errorMessage };
      }

      return { longLiveJwt: data.verifyJWT.longLiveJwt };
    } catch (e) {
      const errorMessage = createErrorMessageObject(
        'There was an internal server error',
        'Please submit your email address again.'
      );

      return { errorMessage };
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
  withFlashMessages,
)(MagicLogin);
