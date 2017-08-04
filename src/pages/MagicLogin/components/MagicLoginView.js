import React from 'react';

import AppHead from 'src/components/AppHead';
import Spinner from 'src/components/Spinner';

function MagicLoginView() {
  return (
    <div>
      <AppHead title="Karma Weekly | Magic Login" />
      <div className="magic-content">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h2>Magic login in progress</h2>
          </div>
        </div>

        <div className="row center-xs">
          <div className="message-container">
            <Spinner radius="8em" />
          </div>
        </div>
      </div>

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
