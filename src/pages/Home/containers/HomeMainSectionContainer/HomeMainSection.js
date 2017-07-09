import React from 'react';
import PropTypes from 'prop-types';

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
        <div className="card form-card">

          {props.isLoadingUser ?
            <Spinner mainColor="#ffae00" radius="9em" /> :
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

        .form-card {
          margin-top: 50px;
          max-width: 600px;
          padding: 50px 50px;
        }
      `}</style>
    </div>
  );
}

export default HomeMainSection;
