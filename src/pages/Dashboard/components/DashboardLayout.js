import React from 'react';
import PropTypes from 'prop-types';

import AppHead from 'src/components/AppHead';

import DashboardTobBar from './DashboardTobBar';
import DashboardConditionalContent from './DashboardConditionalContent';

DashboardLayout.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

function DashboardLayout(props) {
  return (
    <div>
      <AppHead title="Karma Weekly | Dashboard" />
      <DashboardTobBar
        isUserLogged={props.isUserLogged}
        onLogout={props.onLogout}
      />

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
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

export default DashboardLayout;
