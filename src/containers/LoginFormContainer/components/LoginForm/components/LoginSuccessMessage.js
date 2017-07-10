import React from 'react';

function LoginSuccessMessage() {
  return (
    <div className="callout success message-container">
      <h2>Thanks for logging in</h2>

      <p>To complete the login process, please click the link in the email we{'\''}ve just sent you.</p>

      <style jsx>{`
        .message-container {
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default LoginSuccessMessage;
