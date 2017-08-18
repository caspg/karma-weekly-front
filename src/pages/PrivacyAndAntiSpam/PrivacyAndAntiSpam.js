import React from 'react';

import AppHead from 'src/components/AppHead';
import AppFooter from 'src/components/AppFooter';
import FloatingContentCard from 'src/components/FloatingContentCard';

import PrivacyAndAntiSpamNavbar from './components/PrivacyAndAntiSpamNavbar';
import PrivacySection from './components/PrivacySection';
import AntiSpamSection from './components/AntiSpamSection';

function PrivacyAndAntiSpam() {
  return (
    <div className="local-container">
      <AppHead title="Karma Weekly | Privacy and anti-spam policy" />
      <PrivacyAndAntiSpamNavbar />

      <div className="row center-xs">
        <div className="col-xs-12 col-sm-8">
          <FloatingContentCard>
            <PrivacySection />

            <br />

            <AntiSpamSection />

            {/* TODO: */}
            {/* Any Questions? */}
            {/* contact us at team@karmaweekly.com */}

            <br />
            <br />
            <br />

            <AppFooter />
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
