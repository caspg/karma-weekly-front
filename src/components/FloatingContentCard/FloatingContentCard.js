import React from 'react';
import PropTypes from 'prop-types';

FloatingContentCard.propTypes = {
  children: PropTypes.element.isRequired,
};

function FloatingContentCard(props) {
  return (
    <div className="local-container">
      {props.children}

      <style jsx>{`
        .local-container {
          margin: 0 auto;
          margin: 70px 0;
          padding: 50px 25px;
          background-color: white;
          border-radius: 5px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
      `}</style>
    </div>
  );
}

export default FloatingContentCard;
