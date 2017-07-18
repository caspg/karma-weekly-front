import { gql, graphql } from 'react-apollo';

import USER_SUBREDDITS_QUERY from 'src/graphql/queries/userSubreddits';

const REMOVE_SUBREDDIT_MUTATION = gql`
  mutation removeSubreddit($subreddit: String!) {
    removeSubreddit(subreddit: $subreddit) {
      error
      status
    }
  }
`;

function removeSubredditFromUser(removeSubredditResult, store, subreddit) {
  if (removeSubredditResult.status !== 200) {
    return;
  }

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
      update: (store, { data: { removeSubreddit } }) => {
        removeSubredditFromUser(removeSubreddit, store, subreddit);
      },
    }),
  }),
});

export default withRemoveSubredditMutation;
