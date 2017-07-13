import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';

import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';
import withLoggedUserRedirect from 'src/hocs/withLoggedUserRedirect';
import AppLayout from 'src/components/AppLayout';

import HomeMainSection from './components/HomeMainSection';
import HomeImageSection from './components/HomeImageSection';

Home.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function Home(props) {
  return (
    <AppLayout pageTitle="Karma Weekly">
      <HomeMainSection
        isLoadingUser={props.isLoadingUser}
        isUserLogged={props.isUserLogged}
      />

      <HomeImageSection />
    </AppLayout>
  );
}

export default compose(
  withApollo,
  withLoggedUser,
  withLoggedUserRedirect,
)(Home);
