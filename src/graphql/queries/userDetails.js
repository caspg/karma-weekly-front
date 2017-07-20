import { gql } from 'react-apollo';

const USER_DETAILS_QUERY = gql`
  query UserDetails {
    user {
      email
      subreddits
    }
  }
`;

export default USER_DETAILS_QUERY;
