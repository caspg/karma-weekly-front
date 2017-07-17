import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql, compose } from 'react-apollo';

import USER_SUBREDDITS_QUERY from 'src/graphql/queries/userSubreddits';
import AddSubredditForm from './components/AddSubredditForm';

class AddSubredditFormContainer extends Component {
  static propTypes = {
    addSubreddit: PropTypes.func.isRequired,
    data: PropTypes.shape({
      user: PropTypes.shape({
        subreddits: PropTypes.arrayOf(PropTypes.string),
      }),
    }).isRequired,
  }

  handleAddSubreddit = async (subreddit) => {
    const { data } = await this.props.addSubreddit(subreddit);

    if (!data || data.addSubreddit.status !== 200) {
      throw Error('There was an server error');
    }
  }

  render() {
    const subreddits = this.props.data.user && this.props.data.user.subreddits;

    return (
      <AddSubredditForm
        onAddSubreddit={this.handleAddSubreddit}
        subreddits={subreddits}
      />
    );
  }
}

const ADD_SUBREDDIT_MUTATION = gql`
  mutation addSubreddit($subreddit: String!) {
    addSubreddit(subreddit: $subreddit) {
      error
      status
    }
  }
`;

function addSubredditToUser(store, subreddit) {
  const data = store.readQuery({ query: USER_SUBREDDITS_QUERY });
  const updatedData = Object.assign({}, data, {
    user: Object.assign({}, data.user, {
      subreddits: data.user.subreddits.concat(subreddit),
    }),
  });

  store.writeQuery({ query: USER_SUBREDDITS_QUERY, data: updatedData });
}

const withAddSubredditMutation = graphql(ADD_SUBREDDIT_MUTATION, {
  props: ({ mutate }) => ({
    addSubreddit: subreddit => mutate({
      variables: { subreddit },
      update: (store) => { addSubredditToUser(store, subreddit); },
    }),
  }),
});

export default compose(
  graphql(USER_SUBREDDITS_QUERY),
  withAddSubredditMutation,
)(AddSubredditFormContainer);
