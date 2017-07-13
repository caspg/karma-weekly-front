import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';

import Callout from 'src/components/Callout';
import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

import LoginSuccessMessage from './LoginSuccessMessage';

LoginFormContent.propTypes = {
  onEamilChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
  isLoginSuccess: PropTypes.bool.isRequired,
  emailValue: PropTypes.string,
  error: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string.isRequired,
  }),
};

LoginFormContent.defaultProps = {
  error: null,
  emailValue: '',
};

function LoginFormContent(props) {
  const hasError = !!props.error;

  return (
    <div className="form-container">
      {props.isLoginSuccess && <LoginSuccessMessage />}
      {hasError && <Callout {...props.error} type="alert" />}

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
