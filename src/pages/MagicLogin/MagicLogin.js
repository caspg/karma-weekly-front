import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import Router from 'next/router';

import jwtService from 'src/services/jwtService';
import routes from 'src/config/routes';
import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';
import withLoggedUserRedirect from 'src/hocs/withLoggedUserRedirect';
import withFlashMessages from 'src/hocs/withFlashMessages';

import withVerifyJWTMutation from './withVerifyJWTMutation';
import MagicLoginView from './components/MagicLoginView';
import verifyJWT from './verifyJWT';

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
    this.state = { isValidatingToken: true };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.isLoadingUser) return;

    if (!nextProps.isUserLogged && nextState.isValidatingToken) {
      this.handleValidateToken();
    }
  }

  handleValidateToken = async () => {
    const token = this.props.url.query.m;
    const { errorMessage, longLiveJwt } = await verifyJWT(this.props.submitVerifyJWT, token);

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

  render() {
    return <MagicLoginView />;
  }
}

export default compose(
  withApollo,
  withLoggedUser,
  withLoggedUserRedirect,
  withVerifyJWTMutation,
  withFlashMessages,
)(MagicLogin);
