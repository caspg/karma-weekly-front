import React from 'react';
import PropTypes from 'prop-types';

import Callout from 'src/components/Callout';

LoginMessages.propTypes = {
  hasError: PropTypes.bool.isRequired,
  isLoginSuccess: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string.isRequired,
  }),
};

LoginMessages.defaultProps = {
  error: null,
};

function LoginMessages(props) {
  if (!props.hasError && !props.isLoginSuccess) {
    return null;
  }

  if (props.hasError) {
    return <Callout {...props.error} type="alert" />;
  }

  if (props.isLoginSuccess) {
    return (
      <Callout
        type="success"
        title="Thanks for logging in"
        body="To complete the login process, please click the link in the email we've just sent you."
      />
    );
  }
}

export default LoginMessages;
