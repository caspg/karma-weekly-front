import { gql, graphql } from 'react-apollo';

const ADD_SUBREDDIT_MUTATION = gql`
  mutation addSubreddit($subreddit: String!) {
    addSubreddit(subreddit: $subreddit) {
      error
      status
    }
  }
`;

const withAddSubredditMutation = graphql(ADD_SUBREDDIT_MUTATION, {
  props: ({ mutate }) => ({
    addSubreddit: subreddit => mutate({ variables: { subreddit } }),
  }),
});

export default withAddSubredditMutation;
