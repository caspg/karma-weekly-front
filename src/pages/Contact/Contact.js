import React from 'react';

import withAnalytics from 'src/hocs/withAnalytics';
import AppHead from 'src/components/AppHead';
import StaticNavbar from 'src/components/StaticNavbar';
import AppFooter from 'src/components/AppFooter';
import FloatingContentCard from 'src/components/FloatingContentCard';
import config from 'src/config';

function Contact() {
  return (
    <div>
      <AppHead title="Karma Weekly | Contact" />
      <StaticNavbar />

      <div className="row center-xs">
        <div className="col-xs-12 col-sm-8">
          <FloatingContentCard>

            <p>
              If you have questions or suggestions,
              please email us at
            </p>

            <p><strong>{config.contactEmail}</strong></p>

            <br />
            <br />
            <br />

            <AppFooter />
          </FloatingContentCard>
        </div>
      </div>

      <style jsx>{`
        p {
          font-size: 1.5rem;
        }
      `}</style>

      <style jsx global>{`
        body {
          background-color: #f5f5f5;
          background-image: url(/static/images/vintage-leaves.png);
        }
      `}</style>
    </div>
  );
}

export default withAnalytics(Contact);
