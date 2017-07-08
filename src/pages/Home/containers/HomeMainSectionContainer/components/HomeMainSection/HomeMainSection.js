import React from 'react';

import LoginForm from './components/LoginForm';

function HomeMainSection() {
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
        <LoginForm />
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
      `}</style>
    </div>
  );
}

export default HomeMainSection;
