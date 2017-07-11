import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';
import Spinner from 'src/components/Spinner';

import DashboardLoginForm from './DashboardLoginForm';

DashboardConditionalContent.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function DashboardConditionalContent(props) {
  if (props.isLoadingUser) {
    return <Spinner mainColor={colors.orange} radius="9em" />;
  }

  if (!props.isUserLogged) {
    return <DashboardLoginForm />;
  }

  return null;
}

export default DashboardConditionalContent;
