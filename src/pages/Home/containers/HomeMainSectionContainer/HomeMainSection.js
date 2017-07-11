import React from 'react';
import PropTypes from 'prop-types';

import FlashMessagesList from 'src/containers/FlashMessagesList';

import ConditionalMainContent from './components/ConditionalMainContent';

HomeMainSection.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function HomeMainSection(props) {
  return (
    <div className="main-section-container">
      <FlashMessagesList />

      <h1 className="text-center main-text">
        <strong>Karma Weekly</strong>
      </h1>

      <div className="row center-xs">
        <p className="intro-text">
          Receive weekly top stories from your favourit subreddits. Never miss it again.
        </p>
      </div>

      <div className="row center-xs">
        <div className="form-container">

          <ConditionalMainContent
            isLoadingUser={props.isLoadingUser}
            isUserLogged={props.isUserLogged}
          />

        </div>
      </div>

      <style jsx>{`
        .main-section-container {
          margin: 0 40px;
        }

        .main-text {
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
