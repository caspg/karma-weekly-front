import React from 'react';

import AppHead from 'src/components/AppHead';

import HomeMainSectionContainer from './containers/HomeMainSectionContainer';
import HomeImageSection from './components/HomeImageSection';

function Home() {
  return (
    <div>
      <AppHead title="Karma Weekly" />

      <div className="row sections-container">
        <div className="col-xs-5">
          <HomeMainSectionContainer />
        </div>

        <div className="col-xs-7">
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

export default Home;
