import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ApolloClient, withApollo } from 'react-apollo';
import Router from 'next/router';

import routes from 'src/config/routes';
import getComponentDisplayName from 'src/utils/getComponentDisplayName';
import jwtService from 'src/services/jwtService';

function withLogout(ComposedComponent) {
  class ComponentWithLogout extends Component {
    static displayName = (
      `${getComponentDisplayName(ComposedComponent)}WithLogout`
    )

    static propTypes = {
      client: PropTypes.instanceOf(ApolloClient).isRequired,
    }

    handleLogout = () => {
      jwtService.removeFromLocal();
      Router.push(routes.home);
      this.props.client.resetStore();
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          logout={this.handleLogout}
        />
      );
    }
  }

  return withApollo(ComponentWithLogout);
}

export default withLogout;
