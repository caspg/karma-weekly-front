import React from 'react';
import PropTpyes from 'prop-types';

import colors from 'src/styles/colors';

import ErrorMessage from './ErrorMessage';

LoginFormContent.propTypes = {
  onEamilChange: PropTpyes.func.isRequired,
  onSubmit: PropTpyes.func.isRequired,
  validationError: PropTpyes.string,
};

LoginFormContent.defaultProps = {
  validationError: null,
};

function LoginFormContent(props) {
  const hasError = !!props.validationError;

  return (
    <div className="form-container">
      {hasError && <ErrorMessage validationError={props.validationError} />}

      <form onSubmit={props.onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Your email address"
          onChange={props.onEamilChange}
          style={{ borderColor: hasError ? colors.alert : '' }}
        />

        <input
          type="submit"
          className="submit-btn button small expanded warning"
          value="Log in"
          disabled={hasError}
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
