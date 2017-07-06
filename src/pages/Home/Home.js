import React from 'react';

import AppHead from 'src/components/AppHead';

import HomeMainSection from './components/HomeMainSection';
import HomeImageSection from './components/HomeImageSection';

function Home() {
  return (
    <div>
      <AppHead title="Karma Weekly" />

      <div className="grid-x">
        <div className="cell small-5">
          <HomeMainSection />
        </div>

        <div className="cell small-7">
          <HomeImageSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
