function createErrorMessageObject(title, body, code) {
  return { id: Date.now(), type: 'alert', title, body, code };
}

function emptyTokenError() {
  const errorMessage = createErrorMessageObject(
      'Looks like magic link is malformed',
      'Please make sure you\'ve clicked correct link in the email or submit your email address again.',
      'empty-token-error'
    );

  return { errorMessage };
}

function invalidTokenError() {
  const errorMessage = createErrorMessageObject(
    'Your magic link is invalid',
    'Probably your magic link is already expired. Please submit your email address again.',
    'invalid-token-error'
  );

  return { errorMessage };
}

function serverError() {
  const errorMessage = createErrorMessageObject(
    'There was an internal server error',
    'Please submit your email address again.',
    'token-validation-server-error'
  );

  return { errorMessage };
}

/**
 * @param {function} submitVerifyJWT
 * @param {string} token
 * @returns {promise.<object>}
 */
async function verifyJWT(submitVerifyJWT, token) {
  if (!token) {
    return emptyTokenError();
  }

  try {
    const { data } = await submitVerifyJWT(token);

    if (data.verifyJWT.error || !data.verifyJWT.longLiveJwt) {
      return invalidTokenError();
    }

    return { longLiveJwt: data.verifyJWT.longLiveJwt };
  } catch (e) {
    return serverError();
  }
}

export default verifyJWT;
