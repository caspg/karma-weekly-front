import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import routes from 'src/config/routes';

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

function ErrorMessage(props) {
  return (
    <div className="callout alert message-container">
      <p>{props.message}</p>

      <br />

      <Link href={routes.home} prefetch>
        <a>Go to the home page</a>
      </Link>

      <style jsx>{`
        .message-container {
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default ErrorMessage;
