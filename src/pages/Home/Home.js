import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';
import withLoggedUserRedirect from 'src/hocs/withLoggedUserRedirect';
import AppHead from 'src/components/AppHead';

import HomeMainSection from './components/HomeMainSection';
import HomeImageSection from './components/HomeImageSection';

Home.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function Home(props) {
  return (
    <div>
      <AppHead title="Karma Weekly" />

      <div className="row sections-container">
        <div className="col-xs-12 col-sm-6">
          <HomeMainSection
            isLoadingUser={props.isLoadingUser}
            isUserLogged={props.isUserLogged}
          />
        </div>

        <div className="col-xs-12 col-sm-6">
          <HomeImageSection />
        </div>
      </div>

      <style jsx>{`
        .sections-container {
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default compose(
  withApollo,
  withLoggedUser,
  withLoggedUserRedirect,
)(Home);
