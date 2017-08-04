import React from 'react';
import PropTypes from 'prop-types';

import AppHead from 'src/components/AppHead';
import Spinner from 'src/components/Spinner';

import AddSubredditFormContainer from './containers/AddSubredditFormContainer';
import SubredditsTableContainer from './containers/SubredditsTableContainer';
import DashboardNavbar from './components/DashboardNavbar';

DashboardLayout.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

function DashboardLayout(props) {
  return (
    <div className="dashboard-container">
      <AppHead title="Karma Weekly | Dashboard" />

      <div>
        <DashboardNavbar
          isUserLogged={props.isUserLogged}
          onLogout={props.onLogout}
        />

        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="content-container">

              {(props.isLoadingUser || !props.isUserLogged) ?
                <Spinner radius="9em" /> :
                (
                  <div>
                    <AddSubredditFormContainer />
                    <div className="subreddits-table-container">
                      <SubredditsTableContainer />
                    </div>
                  </div>
                )}

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          min-height: 100vh;
          background-image: url(/static/images/vintage-leaves.png);
        }

        .content-container {
          margin: 0 auto;
          margin: 70px 0;
          padding: 50px 25px;
          background-color: white;
          border-radius: 5px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }

        .subreddits-table-container {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

export default DashboardLayout;
