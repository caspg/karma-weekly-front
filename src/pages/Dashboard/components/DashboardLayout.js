import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';
import AppLayout from 'src/components/AppLayout';
import Spinner from 'src/components/Spinner';

import AddSubredditFormContainer from '../containers/AddSubredditFormContainer';

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
              {(props.isLoadingUser || !props.isUserLogged) ?
                <Spinner mainColor={colors.orange} radius="9em" /> :
                <AddSubredditFormContainer />}

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
