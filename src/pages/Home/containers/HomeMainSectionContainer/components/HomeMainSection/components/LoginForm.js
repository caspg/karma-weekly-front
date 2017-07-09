import React from 'react';

function LoginForm() {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Your email address" />

        <input
          type="submit"
          className="submit-btn button small expanded warning"
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
        }

        .submit-btn {
          margin: 0;
        }
      `}</style>
    </div>
  );
}

export default LoginForm;
