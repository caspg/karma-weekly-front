import React from 'react';
import Link from 'next/link';

import routes from 'src/config/routes';

function AppFooter() {
  return (
    <footer>
      <small>
        <p>
          2017 © Karmaweekly.com
        </p>
        <p>
          <Link>
            <a href={routes.privacyAndAntiSpam}>
              Privacy and anti-spam policy
            </a>
          </Link>
        </p>
      </small>

      <style jsx>{`
        p {
          margin: 0;
        }
      `}</style>
    </footer>
  );
}

export default AppFooter;
