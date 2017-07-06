import React from 'react';

import AppHead from 'src/components/AppHead';

import HomeMainSection from './components/HomeMainSection';
import HomeImageSection from './components/HomeImageSection';

function Home() {
  return (
    <div>
      <AppHead title="Karma Weekly" />

      <div className="grid-x sections-container">
        <div className="cell small-5">
          <HomeMainSection />
        </div>

        <div className="cell small-7">
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
