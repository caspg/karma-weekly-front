import React from 'react';
import PropTypes from 'prop-types';

import Callout from 'src/components/Callout';

FlashMessageItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeFlashMessage: PropTypes.func.isRequired,
};

FlashMessageItem.defaultProps = {
  title: null,
};

function FlashMessageItem(props) {
  return (
    <li>
      <Callout
        title={props.title}
        body={props.body}
        type={props.type}
        onCloseClick={() => props.removeFlashMessage(props.id)}
      />
    </li>
  );
}

export default FlashMessageItem;
