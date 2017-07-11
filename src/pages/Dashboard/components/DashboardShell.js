import React from 'react';
import PropTypes from 'prop-types';

import DashboardTobBar from './DashboardTobBar';

DashboardShell.propTypes = {
  children: PropTypes.element.isRequired,
};

function DashboardShell(props) {
  return (
    <div>
      <DashboardTobBar />

      {props.children}
    </div>
  );
}

export default DashboardShell;
