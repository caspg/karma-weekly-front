import React from 'react';
import PropTpyes from 'prop-types';

LoginFormContent.propTypes = {
  onEamilChange: PropTpyes.func.isRequired,
  onSubmit: PropTpyes.func.isRequired,
};

function LoginFormContent(props) {
  return (
    <div className="form-container">
      <form onSubmit={props.onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Your email address"
          onChange={props.onEamilChange}
        />

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

export default LoginFormContent;
