import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';
import withLogout from 'src/hocs/withLogout';

import DashboardLayout from './components/DashboardLayout';

Dashboard.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function Dashboard(props) {
  return (
    <DashboardLayout
      isLoadingUser={props.isLoadingUser}
      isUserLogged={props.isUserLogged}
      onLogout={props.logout}
    />
  );
}

export default compose(
  withApollo,
  withLoggedUser,
  withLogout,
)(Dashboard);
