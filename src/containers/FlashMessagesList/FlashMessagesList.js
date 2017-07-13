import React from 'react';
import PropTypes from 'prop-types';

import withFlashMessages from 'src/hocs/withFlashMessages';

import FlashMessageItem from './components/FlashMessageItem';

FlashMessagesList.propTypes = {
  flashMessages: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFlashMessage: PropTypes.func.isRequired,
};

function FlashMessagesList(props) {
  if (!props.flashMessages || props.flashMessages.length === 0) {
    return null;
  }

  return (
    <ul>
      {props.flashMessages.map(flashMessage => (
        <FlashMessageItem
          key={flashMessage.id}
          {...flashMessage}
          removeFlashMessage={props.removeFlashMessage}
        />
      ))}

      <style jsx>{`
        ul {
          list-style: none;
          position: absolute;
          top: 0;
          right: 0;
          margin-top: 10px;
          margin-right: 10px;
        }
      `}</style>
    </ul>
  );
}

export default withFlashMessages(FlashMessagesList);
