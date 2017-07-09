import React from 'react';
import PropTypes from 'prop-types';

Spinner.propTypes = {
  mainColor: PropTypes.string,
  bgColor: PropTypes.string,
  radius: PropTypes.string,
};

Spinner.defaultProps = {
  mainColor: '#5dc0de',
  bgColor: '#ddd',
  radius: '10em',
};

function Spinner(props) {
  const bgBorderStyle = `.25rem solid ${props.bgColor}`;
  const dynamicStyles = {
    borderLeft: `.25rem solid ${props.mainColor}`,
    borderTop: bgBorderStyle,
    borderRight: bgBorderStyle,
    borderBottom: bgBorderStyle,
    width: props.radius,
    height: props.radius,
  };

  return (
    <div>
      <div className="loader" style={dynamicStyles}>Loading...</div>

      <style jsx>{`
        .loader,
        .loader:after {
          border-radius: 50%;
        }

        .loader {
          margin: 0 auto;
          font-size: 10px;
          position: relative;
          text-indent: -9999em;

          -webkit-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
          -webkit-animation: load8 1.1s infinite linear;
          animation: load8 1.1s infinite linear;
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
