import React from 'react';
import PropTpyes from 'prop-types';

import colors from 'src/styles/colors';

import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

import ValidationErrorMessage from './ValidationErrorMessage';
import LoginSuccessMessage from './LoginSuccessMessage';
import LoginErrorMessage from './LoginErrorMessage';

LoginFormContent.propTypes = {
  onEamilChange: PropTpyes.func.isRequired,
  onSubmit: PropTpyes.func.isRequired,
  isSending: PropTpyes.bool.isRequired,
  isLoginSuccess: PropTpyes.bool.isRequired,
  isServerError: PropTpyes.bool.isRequired,
  validationError: PropTpyes.string,
  emailValue: PropTpyes.string,
};

LoginFormContent.defaultProps = {
  validationError: null,
  emailValue: '',
};

function LoginFormContent(props) {
  const hasError = !!props.validationError;

  return (
    <div className="form-container">
      {props.isLoginSuccess && <LoginSuccessMessage />}
      {props.isServerError && <LoginErrorMessage />}
      {hasError && <ValidationErrorMessage validationError={props.validationError} />}

      <form onSubmit={props.onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Your email address"
          onChange={props.onEamilChange}
          value={props.emailValue}
          style={{ borderColor: hasError ? colors.alert : '' }}
          disabled={props.isLoginSuccess}
        />

        <ButtonWithSpinner
          type="submit"
          className="submit-btn button small expanded warning"
          disabled={hasError || props.isSending || props.isLoginSuccess}
          isLoading={props.isSending}
        >
          Log in
        </ButtonWithSpinner>

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
