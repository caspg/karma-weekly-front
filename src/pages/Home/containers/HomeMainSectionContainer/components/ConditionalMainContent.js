import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';
import LoginFormContainer from 'src/containers/LoginFormContainer';
import Spinner from 'src/components/Spinner';

import LoggedUserMessage from './LoggedUserMessage';

MainContent.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};


function MainContent(props) {
  if (props.isLoadingUser) {
    return <Spinner mainColor={colors.orange} radius="9em" />;
  }

  if (props.isUserLogged) {
    return <LoggedUserMessage />;
  }

  return <LoginFormContainer />;
}

export default MainContent;
