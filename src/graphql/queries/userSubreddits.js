import { gql } from 'react-apollo';

const USER_SUBREDDITS_QUERY = gql`
  query UserSubreddits {
    user {
      subreddits
    }
  }
`;

export default USER_SUBREDDITS_QUERY;
