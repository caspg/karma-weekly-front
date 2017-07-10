import React from 'react';
import PropTypes from 'prop-types';

import colors from 'src/styles/colors';
import LoginFormContainer from 'src/containers/LoginFormContainer';
import Spinner from 'src/components/Spinner';

HomeMainSection.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
};

function HomeMainSection(props) {
  return (
    <div className="main-section-container">
      <h1 className="text-center">
        <strong>Karma Weekly</strong>
      </h1>

      <div className="row center-xs">
        <p className="intro-text">
          Receive weekly top stories from your favourit subreddits. Never miss it again.
        </p>
      </div>

      <div className="row center-xs">
        <div className="form-container">
          {props.isLoadingUser ?
            <Spinner mainColor={colors.orange} radius="9em" /> :
            <LoginFormContainer />}

        </div>
      </div>

      <style jsx>{`
        .main-section-container {
          margin: 0 40px;
          margin-top: 100px;
        }

        .intro-text {
          max-width: 500px;
          text-align: left;
          font-size: 1.2em;
        }

        .form-container {
          margin-top: 50px;
          width: 100%;
          max-width: 600px;
          padding: 50px 50px;
        }
      `}</style>
    </div>
  );
}

export default HomeMainSection;
