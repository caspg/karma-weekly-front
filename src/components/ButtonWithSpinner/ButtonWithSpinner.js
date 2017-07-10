import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';
import Spinner from 'src/components/Spinner';

ButtonWithSpinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

ButtonWithSpinner.defaultProps = {
  type: 'button',
  className: 'button',
};

function ButtonWithSpinner(props) {
  const buttonStyle = {
    padding: '0.7em 1em',
    fontSize: '1em',
  };

  return (
    <button
      type={props.type}
      className={props.className}
      style={buttonStyle}
      disabled={props.disabled || props.isLoading}
    >
      {
        !props.isLoading ?
          props.children :
          <Spinner
            mainColor={colors.black}
            bgColor="rgba(0,0,0,0)"
            borderWidth="0.1em"
            radius="1em"
          />
      }

    </button>
  );
}

export default ButtonWithSpinner;
