import React from 'react';

import colors from 'src/styles/colors';
import AppLayout from 'src/components/AppLayout';
import Spinner from 'src/components/Spinner';

function MagicLoginView() {
  return (
    <div>
      <AppLayout pageTitle="Karma Weekly | Magic Login">
        <div />

        <div className="magic-content">
          <div className="row center-xs">
            <div className="col-xs-12">
              <h2>Magic login in progress</h2>
            </div>
          </div>

          <div className="row center-xs">
            <div className="message-container">
              <Spinner mainColor={colors.orange} radius="8em" />
            </div>
          </div>
        </div>

      </AppLayout>

      <style jsx>{`
        .magic-content {
          margin: 0 auto;
          margin-top: 100px;
          max-width: 600px;

          padding: 50px 0;
        }

        .message-container {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}

export default MagicLoginView;
