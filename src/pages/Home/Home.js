import React from 'react';

import withApollo from 'src/hocs/withApollo';
import AppHead from 'src/components/AppHead';

import HomeMainSectionContainer from './containers/HomeMainSectionContainer';
import HomeImageSection from './components/HomeImageSection';

function Home() {
  return (
    <div>
      <AppHead title="Karma Weekly" />

      <div className="row sections-container">
        <div className="col-xs-12 col-sm-6">
          <HomeMainSectionContainer />
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

export default withApollo(Home);
