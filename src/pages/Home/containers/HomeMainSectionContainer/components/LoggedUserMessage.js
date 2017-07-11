import React from 'react';
import Link from 'next/link';

import routes from 'src/config/routes';

function LoggedUserMessage() {
  return (
    <div className="callout success">
      <h5>Hello dear user</h5>

      <p>You are already logged in. Go to the dashboard to manage your subscriptions.</p>

      <br />

      <Link href={routes.dashboard}>
        <a>Go to the dashboard</a>
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
