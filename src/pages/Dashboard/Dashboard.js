import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';
import AppHead from 'src/components/AppHead';

import DashboardTobBar from './components/DashboardTobBar';
import DashboardConditionalContent from './components/DashboardConditionalContent';

Dashboard.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function Dashboard(props) {
  return (
    <div>
      <AppHead title="Karma Weekly | Dashboard" />
      <DashboardTobBar />

      <div className="row center-xs">
        <div className="col-xs-10">
          <div className="content-container">
            <DashboardConditionalContent
              isUserLogged={props.isUserLogged}
              isLoadingUser={props.isLoadingUser}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-container {
          margin: 0 auto;
          margin-top: 100px;
        }
      `}</style>
    </div>
  );
}

export default compose(
  withApollo,
  withLoggedUser,
)(Dashboard);
