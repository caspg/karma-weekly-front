import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql, withApollo as withApolloClient, compose, ApolloClient } from 'react-apollo';

import jwtService from 'src/services/jwtService';

import DeleteUserButton from './components/DeleteUserButton';

class DeleteUserContainer extends Component {
  static propTypes = {
    client: PropTypes.instanceOf(ApolloClient).isRequired,
    removeUser: PropTypes.func.isRequired,
  }

  handleRemoveUser = async () => {
    const { data } = await this.props.removeUser();

    if (!data || data.removeUser.status !== 200) {
      throw Error('There was a server error');
    }

    jwtService.removeFromLocal();
    this.props.client.resetStore();
  }

  render() {
    return (
      <DeleteUserButton
        removeUser={this.handleRemoveUser}
      />
    );
  }
}

const REMOVE_USER_MUTATION = gql`
  mutation removeUser {
    removeUser {
      error
      status
    }
  }
`;

const withRemoveUserMutation = graphql(REMOVE_USER_MUTATION, {
  props: ({ mutate }) => ({
    removeUser: () => mutate(),
  }),
});

export default compose(
  withApolloClient,
  withRemoveUserMutation,
)(DeleteUserContainer);
