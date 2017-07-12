import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import routes from 'src/config/routes';
import getComponentDisplayName from 'src/utils/getComponentDisplayName';

function withLoggedUserRedirect(ComposedComponent) {
  class ComponentWithLoggedUserRedirect extends Component {
    static displayName = (
      `${getComponentDisplayName(ComposedComponent)}WithLoggedUserRedirect`
    )

    static propTypes = {
      isLoadingUser: PropTypes.bool.isRequired,
      isUserLogged: PropTypes.bool.isRequired,
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isLoadingUser && nextProps.isUserLogged) {
        Router.push(routes.dashboard);
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  return ComponentWithLoggedUserRedirect;
}

export default withLoggedUserRedirect;
