import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';

DashboardTobBar.propTypes = {
};

function DashboardTobBar(props) {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text site-title">Karma Weekly</li>
        </ul>
      </div>

      <style>{`
        .top-bar {
          background-color: ${colors.grey200};
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
