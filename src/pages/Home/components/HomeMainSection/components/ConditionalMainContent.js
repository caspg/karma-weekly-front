import React from 'react';
import PropTypes from 'prop-types';

import LoginFormContainer from 'src/containers/LoginFormContainer';
import Spinner from 'src/components/Spinner';

MainContent.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function MainContent(props) {
  if (props.isLoadingUser || props.isUserLogged) {
    return <Spinner radius="9em" />;
  }

  return <LoginFormContainer />;
}

export default MainContent;
