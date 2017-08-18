import React from 'react';
import Link from 'next/link';

import routes from 'src/config/routes';
import config from 'src/config';

function AppFooter() {
  return (
    <footer>
      <small>
        <p>
          2017 © {config.appDomainName}
        </p>
        <p>
          <Link>
            <a href={routes.contact}>
              Contact
            </a>
          </Link>
          {' '}|{' '}
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
