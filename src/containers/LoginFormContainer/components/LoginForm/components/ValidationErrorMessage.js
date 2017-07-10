import React from 'react';
import PropTpyes from 'prop-types';

import colors from 'src/styles/colors';

ValidationErrorMessage.propTypes = {
  validationError: PropTpyes.string.isRequired,
};

function ValidationErrorMessage(props) {
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

export default ValidationErrorMessage;
