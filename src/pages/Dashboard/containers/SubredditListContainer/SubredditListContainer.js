import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import SubredditList from './components/SubredditList';

SubredditListContainer.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      subreddits: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }).isRequired,
};

function SubredditListContainer(props) {
  // TODO: display loader when data are loading
  const subreddits = props.data.loading ? [] : props.data.user.subreddits;

  return (
    <SubredditList subreddits={subreddits} />
  );
}

const USER_SUBREDDITS_QUERY = gql`
  query UserSubreddits {
    user {
      subreddits
    }
  }
`;

const withUserSubredditsQuery = graphql(USER_SUBREDDITS_QUERY);

export default withUserSubredditsQuery(SubredditListContainer);
