import React from 'react';

import AppHead from 'src/components/AppHead';
import StaticNavbar from 'src/components/StaticNavbar';
import AppFooter from 'src/components/AppFooter';
import FloatingContentCard from 'src/components/FloatingContentCard';

function Contact() {
  return (
    <div>
      <AppHead title="Karma Weekly | Contact" />
      <StaticNavbar />

      <div className="row center-xs">
        <div className="col-xs-12 col-sm-8">
          <FloatingContentCard>
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

export default Contact;
