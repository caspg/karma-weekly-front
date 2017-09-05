import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ApolloClient, compose, withApollo as withApolloClient } from 'react-apollo';
import Router from 'next/router';

import jwtService from 'src/services/jwtService';
import routes from 'src/config/routes';
import withAnalytics from 'src/hocs/withAnalytics';
import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';
import withLoggedUserRedirect from 'src/hocs/withLoggedUserRedirect';
import withFlashMessages from 'src/hocs/withFlashMessages';
import getUrlParameter from 'src/utils/getUrlParameter';

import withVerifyJWTMutation from './graphql/withVerifyJWTMutation';
import MagicLoginView from './components/MagicLoginView';
import verifyJWT from './services/verifyJWT';

class MagicLogin extends Component {
  static propTypes = {
    isLoadingUser: PropTypes.bool.isRequired,
    isUserLogged: PropTypes.bool.isRequired,
    submitVerifyJWT: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    client: PropTypes.instanceOf(ApolloClient).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { isValidatingToken: true };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoadingUser) return;

    if (nextProps.isUserLogged) {
      Router.replace(routes.dashboard);
    }

    if (!nextProps.isUserLogged && this.state.isValidatingToken) {
      this.handleValidateToken();
    }
  }

  handleValidateToken = async () => {
    // For some reason, next.js (url queries) does not work when hosting in s3
    const token = getUrlParameter('m');
    const { errorMessage, longLiveJwt } = await verifyJWT(this.props.submitVerifyJWT, token);

    this.setState({ isValidatingToken: false }, () => {
      if (errorMessage) {
        this.props.addFlashMessage(errorMessage);
        Router.replace(routes.home);

        return;
      }

      jwtService.saveInLocal(longLiveJwt);
      // reset store and refetch all queries
      this.props.client.resetStore();
      Router.replace(routes.dashboard);
    });
  }

  render() {
    return <MagicLoginView />;
  }
}

export default compose(
  withAnalytics,
  withApollo,
  withApolloClient,
  withLoggedUser,
  withLoggedUserRedirect,
  withVerifyJWTMutation,
  withFlashMessages,
)(MagicLogin);
