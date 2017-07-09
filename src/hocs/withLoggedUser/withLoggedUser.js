import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

import getComponentDisplayName from 'src/utils/getComponentDisplayName';

function withLoggedUser(ComposedComponent) {
  // eslint-disable-next-line react/prefer-stateless-function
  class ComponentWithLoggedUser extends Component {
    static displayName = (
      `${getComponentDisplayName(ComposedComponent)}WithLoggedUser`
    )

    static propTypes = {
      data: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        user: PropTypes.shape({
          email: PropTypes.string,
        }),
      }).isRequired,
    }

    render() {
      const { data } = this.props;
      const isUserLogged = !!(data.user && data.user.email);
      const isLoadingUser = data.loading;

      return (
        <ComposedComponent
          {...this.props}
          isUserLogged={isUserLogged}
          isLoadingUser={isLoadingUser}
        />
      );
    }
  }

  const USER_EMAIL_QUERY = gql`
    query UserEmail {
      user {
        email
      }
    }
  `;

  return graphql(USER_EMAIL_QUERY)(ComponentWithLoggedUser);
}

export default withLoggedUser;
