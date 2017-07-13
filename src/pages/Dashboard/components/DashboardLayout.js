import React from 'react';
import PropTypes from 'prop-types';

import AppLayout from 'src/components/AppLayout';

import DashboardConditionalContent from './DashboardConditionalContent';

DashboardLayout.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  // onLogout: PropTypes.func.isRequired,
};

function DashboardLayout(props) {
  return (
    <div>
      <AppLayout pageTitle="Karma Weekly | Dashboard">
        <div />

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
      </AppLayout>

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
