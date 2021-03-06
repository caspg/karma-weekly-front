import React, { Children } from 'react';
import PropTypes from 'prop-types';

import AppHead from 'src/components/AppHead';

import FlashMessagesList from 'src/containers/FlashMessagesList';

HomeLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

function HomeLayout(props) {
  const childrenArray = Children.toArray(props.children);

  return (
    <div>
      <AppHead title="Karma Weekly" />

      <div className="row sections-container">
        <div className="col-xs-12 col-md-4">
          <div className="main-section-container">
            <FlashMessagesList />

            <h1 className="text-center main-text">
              <strong>Karma Weekly</strong>
            </h1>

            <div className="row center-xs">
              <p className="intro-text">
                Receive top stories from your favourite subreddits each week. Never miss it again.
              </p>
            </div>

            {childrenArray[0]}
          </div>
        </div>

        <div className="col-xs-12 col-md-8 secondary-section-container">
          {childrenArray[1]}
        </div>
      </div>

      <style jsx>{`
        .sections-container {
          height: 100vh;
        }

        .main-section-container {
          margin: 0 40px;
        }

        .main-text {
          margin-top: 100px;
        }

        .intro-text {
          font-size: 1.2em;
        }

        .secondary-section-container {
          overflow: scroll;
          background-color: #f5f5f5;
          background-image: url(/static/images/vintage-leaves.png);
        }
      `}</style>
    </div>
  );
}

export default HomeLayout;
