import React from 'react';

import LoginFormContainer from 'src/containers/LoginFormContainer';

function DashboardLoginForm() {
  return (
    <div className="container">
      <div className="callout secondary login-callout">
        <h5>You are not logged in</h5>

        <p>Please login to continue.</p>
      </div>

      <br />

      <LoginFormContainer />

      <style jsx>{`
        .login-callout {
          text-align: left;
        }

        .container {
          width: 100%;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}

export default DashboardLoginForm;
