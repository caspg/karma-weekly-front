import React from 'react';

function LoginForm() {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Your email address" />

        <input
          type="submit"
          className="button small expanded warning"
          value="Log in"
        />

      </form>

      <style jsx>{`
        .form-container {
          width: 100%;
        }

        form {
          width: 100%;
          margin: 0 auto;
          margin-top: 50px;
          max-width: 500px;
        }
      `}</style>
    </div>
  );
}

export default LoginForm;
