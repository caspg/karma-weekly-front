import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';
import AppHead from 'src/components/AppHead';
import Spinner from 'src/components/Spinner';

MagicLoginView.propTypes = {
  isValidatingToken: PropTypes.bool.isRequired,
};

function MagicLoginView(props) {
  return (
    <div>
      <AppHead title="Karma Weekly | Magic Login" />

      <div className="row center-xs">
        <div className="col-xs-12">
          <h1><strong>Karma Weekly</strong></h1>
        </div>

        <div className="col-xs-12">
          <h2>Magic login in progress</h2>
        </div>
      </div>

      <div className="row center-xs">
        <div className="message-container">
          {props.isValidatingToken &&
            <Spinner mainColor={colors.orange} radius="8em" />}
        </div>
      </div>

      <style jsx>{`
         h1 {
           margin-top: 100px;
         }

         .message-container {
           max-width: 600px;
           margin-top: 50px;
         }
      `}</style>
    </div>
  );
}

export default MagicLoginView;
