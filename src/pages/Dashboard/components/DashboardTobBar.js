import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';

DashboardTobBar.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
};

function DashboardTobBar(props) {
  return (
    <div className="top-bar">
      <div className="top-bar-left">

        <ul className="menu">
          <li className="menu-text site-title">Karma Weekly</li>
        </ul>
      </div>

      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Log out</li>
        </ul>
      </div>

      <style>{`
        .top-bar {
          background-color: ${colors.grey200};
          padding-left: 50px;
          padding-right: 50px;
        }

        .menu {
          background-color: ${colors.grey200} !important;
        }

        .site-title {
          font-size: 1.5em;
        }
      `}</style>
    </div>
  );
}

export default DashboardTobBar;
