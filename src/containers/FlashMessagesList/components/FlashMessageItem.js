import React from 'react';
import PropTypes from 'prop-types';

FlashMessageItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeFlashMessage: PropTypes.func.isRequired,
};

function FlashMessageItem(props) {
  const { body, title, type, id } = props;
  const className = `callout ${type}`;

  return (
    <li>
      <div className={className}>
        {title && <h5>{title}</h5>}

        {body}

        <button
          className="close-button"
          type="button"
          onClick={() => props.removeFlashMessage(id)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </li>
  );
}

export default FlashMessageItem;
