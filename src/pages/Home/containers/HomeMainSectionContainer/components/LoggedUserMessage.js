import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import routes from 'src/config/routes';

LoggedUserMessage.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
};

function LoggedUserMessage() {
  return (
    <div className="callout success">
      <h5>Hello dear user</h5>

      <p>You are already logged in. Go to the dashboard to edit your subscriptions.</p>

      <br />

      <Link href={routes.dashboard}>
        Go to the dashboard
      </Link>

      <style jsx>{`
        .callout {
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default LoggedUserMessage;
