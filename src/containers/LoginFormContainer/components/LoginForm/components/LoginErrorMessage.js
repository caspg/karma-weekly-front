import React from 'react';

function LoginErrorMessage() {
  return (
    <div className="callout alert message-container">
      <p>There was an internal server error.</p>
      <p>Please try again later.</p>

      <style jsx>{`
        .message-container {
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default LoginErrorMessage;
