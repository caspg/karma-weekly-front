import React from 'react';
import PropTypes from 'prop-types';

import AppHead from 'src/components/AppHead';
import Spinner from 'src/components/Spinner';

import AddSubredditFormContainer from './containers/AddSubredditFormContainer';
import SubredditsTableContainer from './containers/SubredditsTableContainer';
import DeleteUserContainer from './containers/DeleteUserContainer';
import DashboardNavbar from './components/DashboardNavbar';

DashboardLayout.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

function DashboardLayout(props) {
  return (
    <div>
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
                    <SubredditsTableContainer />

                    <br />
                    <br />

                    <DeleteUserContainer />
                  </div>
                )}

            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .content-container {
          margin: 0 auto;
          margin-top: 70px;
        }
      `}</style>
    </div>
  );
}

export default DashboardLayout;
