import React from 'react';
import PropTypes from 'prop-types';

Spinner.propTypes = {
  mainColor: PropTypes.string,
  bgColor: PropTypes.string,
  radius: PropTypes.string,
  borderWidth: PropTypes.string,
};

Spinner.defaultProps = {
  mainColor: '#1779ba',
  bgColor: '#ddd',
  radius: '10em',
  borderWidth: '0.25em',
};

function Spinner(props) {
  const bgBorderStyle = `solid ${props.bgColor}`;
  const mainBorderStyle = `solid ${props.mainColor}`;

  const dynamicStyles = {
    borderLeft: mainBorderStyle,
    borderTop: mainBorderStyle,
    borderRight: bgBorderStyle,
    borderBottom: bgBorderStyle,
    borderWidth: props.borderWidth,
    width: props.radius,
    height: props.radius,
  };

  return (
    <div className="loader-container">
      <div className="loader" style={dynamicStyles}>Loading...</div>

      <style jsx>{`
        .loader-container {
          overflow: hidden;
        }

        .loader,
        .loader:after {
          border-radius: 50%;
        }

        .loader {
          margin: 0 auto;
          position: relative;
          text-indent: -9999em;

          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load8 0.8s infinite linear;
          animation: load8 0.8s infinite linear;
        }

        @-webkit-keyframes load8 {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }

        @keyframes load8 {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Spinner;
