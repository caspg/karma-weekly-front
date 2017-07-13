import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';
import Spinner from 'src/components/Spinner';

import AddSubredditFormContainer from '../containers/AddSubredditFormContainer';

DashboardConditionalContent.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function DashboardConditionalContent(props) {
  if (props.isLoadingUser || !props.isUserLogged) {
    return <Spinner mainColor={colors.orange} radius="9em" />;
  }

  return <AddSubredditFormContainer />;
}

export default DashboardConditionalContent;
