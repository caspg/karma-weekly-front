import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';

import DashboardLayout from './components/DashboardLayout';

Dashboard.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function Dashboard(props) {
  function handleLogOut() {

  }

  return (
    <DashboardLayout
      isLoadingUser={props.isLoadingUser}
      isUserLogged={props.isUserLogged}
      onLogout={handleLogOut}
    />
  );
}

export default compose(
  withApollo,
  withLoggedUser,
)(Dashboard);
