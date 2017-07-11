import React from 'react';
import PropTypes from 'prop-types';

import AppHead from 'src/components/AppHead';

import DashboardShell from './components/DashboardShell';

function Dashboard(props) {
  return (
    <div>
      <AppHead title="Karma Weekly | Dashboard" />

      <DashboardShell>
        <h1>Dashboard</h1>
      </DashboardShell>
    </div>
  );
}

export default Dashboard;
