import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import USER_SUBREDDITS_QUERY from 'src/graphql/queries/userSubreddits';
import SubredditsTable from './components/SubredditsTable';

SubredditsTableContainer.propTypes = {
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
    <SubredditsTable subreddits={subreddits} />
  );
}

const withUserSubredditsQuery = graphql(USER_SUBREDDITS_QUERY);

export default withUserSubredditsQuery(SubredditsTableContainer);
