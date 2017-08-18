import React from 'react';
import PropTypes from 'prop-types';

import AppHead from 'src/components/AppHead';
import AppFooter from 'src/components/AppFooter';
import Spinner from 'src/components/Spinner';
import FloatingContentCard from 'src/components/FloatingContentCard';

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
          <div className="col-xs-12 col-sm-8">
            <FloatingContentCard>

              {(props.isLoadingUser || !props.isUserLogged) ?
                <Spinner radius="9em" /> :
                (
                  <div>
                    <AddSubredditFormContainer />

                    <div className="form-info">
                      <p><small><i>You can only subsribe to 10 subreddits!</i></small></p>
                    </div>

                    <div className="subreddits-table-container">
                      <SubredditsTableContainer />
                    </div>
                  </div>
                )}

              <div className="footer-container">
                <AppFooter />
              </div>
            </FloatingContentCard>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          background-color: #f5f5f5;
          background-image: url(/static/images/vintage-leaves.png);
        }
      `}</style>

      <style jsx>{`
        .form-info {
          text-align: left;
        }

        .subreddits-table-container {
          margin-top: 50px;
        }

        .footer-container {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

export default DashboardLayout;
