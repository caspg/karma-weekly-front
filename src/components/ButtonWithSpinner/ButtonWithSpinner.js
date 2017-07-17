import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';
import Spinner from 'src/components/Spinner';

ButtonWithSpinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  spinnerColor: PropTypes.string,
  customStyle: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

ButtonWithSpinner.defaultProps = {
  type: 'button',
  className: 'button',
  disabled: false,
  customStyle: {},
  spinnerColor: '',
};

function ButtonWithSpinner(props) {
  const buttonStyle = {
    padding: '0.7em 1em',
    fontSize: '1em',
  };

  const spinnerColor = props.spinnerColor || colors.black;

  return (
    <button
      type={props.type}
      className={props.className}
      style={Object.assign({}, buttonStyle, props.customStyle)}
      disabled={props.disabled}
    >
      {
        !props.isLoading ?
          props.children :
          <Spinner
            mainColor={spinnerColor}
            bgColor="rgba(0,0,0,0)"
            borderWidth="0.1em"
            radius="1em"
          />
      }

    </button>
  );
}

export default ButtonWithSpinner;
