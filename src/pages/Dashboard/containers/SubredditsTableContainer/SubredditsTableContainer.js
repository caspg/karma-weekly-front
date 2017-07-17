import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';

import USER_SUBREDDITS_QUERY from 'src/graphql/queries/userSubreddits';
import SubredditsTable from './components/SubredditsTable';

SubredditsTableContainer.propTypes = {
  removeSubreddit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      subreddits: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

function SubredditsTableContainer(props) {
  // TODO: display loader when data are loading
  if (props.data.loading) {
    return null;
  }

  const subreddits = props.data.user.subreddits || [];

  return (
    <SubredditsTable
      removeSubreddit={props.removeSubreddit}
      subreddits={subreddits}
    />
  );
}

const REMOVE_SUBREDDIT_MUTATION = gql`
  mutation removeSubreddit($subreddit: String!) {
    removeSubreddit(subreddit: $subreddit) {
      error
      status
    }
  }
`;

function removeSubredditFromUser(store, subreddit) {
  const data = store.readQuery({ query: USER_SUBREDDITS_QUERY });
  const updatedData = Object.assign({}, data, {
    user: Object.assign({}, data.user, {
      subreddits: data.user.subreddits.filter(s => s !== subreddit),
    }),
  });

  store.writeQuery({ query: USER_SUBREDDITS_QUERY, data: updatedData });
}

const withRemoveSubredditMutation = graphql(REMOVE_SUBREDDIT_MUTATION, {
  props: ({ mutate }) => ({
    removeSubreddit: subreddit => mutate({
      variables: { subreddit },
      update: (store) => { removeSubredditFromUser(store, subreddit); },
    }),
  }),
});

const withUserSubredditsQuery = graphql(USER_SUBREDDITS_QUERY);

export default compose(
  withRemoveSubredditMutation,
  withUserSubredditsQuery,
)(SubredditsTableContainer);
