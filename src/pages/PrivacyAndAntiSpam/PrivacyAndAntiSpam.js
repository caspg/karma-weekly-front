import React from 'react';

import AppHead from 'src/components/AppHead';
import FloatingContentCard from 'src/components/FloatingContentCard';

import PrivacyAndAntiSpamNavbar from './components/PrivacyAndAntiSpamNavbar';

function PrivacyAndAntiSpam() {
  return (
    <div className="local-container">
      <AppHead title="Karma Weekly | Privacy and anti-spam policy" />
      <PrivacyAndAntiSpamNavbar />

      <div className="row center-xs">
        <div className="col-xs-12 col-sm-8">
          <FloatingContentCard>
            <h1>PrivacyAndAntiSpam</h1>
          </FloatingContentCard>
        </div>
      </div>


      <style jsx global>{`
        body {
          background-color: #f5f5f5;
          background-image: url(/static/images/vintage-leaves.png);
        }
      `}</style>
    </div>
  );
}

export default PrivacyAndAntiSpam;
