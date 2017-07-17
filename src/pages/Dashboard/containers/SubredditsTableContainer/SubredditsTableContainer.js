import React from 'react';
import { gql, graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import SubredditsTable from './components/SubredditsTable';

SubredditsTableContainer.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      subreddits: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  }).isRequired,
};

function SubredditsTableContainer(props) {
  // TODO: display loader when data are loading
  const subreddits = props.data.loading ? [] : props.data.user.subreddits;

  return (
    <SubredditsTable subreddits={subreddits} />
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

export default withUserSubredditsQuery(SubredditsTableContainer);
