import React from 'react';

// import Spinner from 'src/components/Spinner';
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
        <div className="card form-card">
          <LoginForm />
          {/* <Spinner mainColor="#ffae00" radius="9em" /> */}
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
