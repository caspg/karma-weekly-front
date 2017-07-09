import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

function withLoggedUser(ComposedComponent) {
  // eslint-disable-next-line react/prefer-stateless-function
  class ComponentWithLoggedUser extends Component {
    static propTypes = {
      data: PropTypes.shape({
        user: PropTypes.shape({
          email: PropTypes.string,
        }),
      }).isRequired,
    }

    render() {
      const { data } = this.props;
      const isUserLogged = !!(data && data.user && data.user.email);

      return (
        <ComposedComponent
          {...this.props}
          isUserLogged={isUserLogged}
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
