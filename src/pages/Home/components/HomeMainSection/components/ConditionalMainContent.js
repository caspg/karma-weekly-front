import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import routes from 'src/config/routes';
import LoginFormContainer from 'src/containers/LoginFormContainer';

import Spinner from 'src/components/Spinner';

MainContent.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function MainContent(props) {
  if (props.isLoadingUser) {
    return <Spinner radius="9em" />;
  }

  if (props.isUserLogged) {
    return (
      <div className="callout success" style={{ textAlign: 'left' }}>
        You are already logged in. Go to the{' '}
        <Link>
          <a href={routes.dashboard}>
            <strong>Dashboard</strong>
          </a>
        </Link>
        {' '}to manage your subsription.
      </div>
    );
  }

  return <LoginFormContainer />;
}

export default MainContent;
