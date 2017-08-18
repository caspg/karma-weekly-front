import React from 'react';
import Link from 'next/link';

import colors from 'src/styles/colors';
import routes from 'src/config/routes';

function StaticNavbar() {
  return (
    <div className="top-navbar row middle-xs">
      <div className="col-xs-4">
        <div className="row start-xs middle-xs">
          <Link>
            <a href={routes.home}>
              <h3 className="site-title">Karma Weekly</h3>
            </a>
          </Link>
        </div>
      </div>


      <div className="col-xs-8">
        <div className="row end-xs middle-xs">
          <Link>
            <a href={routes.home}>
              Home
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .top-navbar {
          min-height: 60px;
          border-bottom: 1px solid #ddd;
          position: relative;
          padding-left: 50px;
          padding-right: 50px;
          background-color: white;
        }

        a {
          margin: 0;
          color: ${colors.black};
        }

        a:hover {
          color: black;
        }
      `}</style>
    </div>
  );
}

export default StaticNavbar;
