import React from 'react';
import PropTpyes from 'prop-types';

import colors from 'src/styles/colors';

ErrorMessage.propTypes = {
  validationError: PropTpyes.string.isRequired,
};

function ErrorMessage(props) {
  return (
    <div>
      <p>{props.validationError}</p>

      <style jsx>{`
        p {
          text-align: left;
          color: ${colors.alert}
        }
      `}</style>
    </div>
  );
}

export default ErrorMessage;
