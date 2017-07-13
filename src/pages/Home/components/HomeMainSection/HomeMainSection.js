import React from 'react';
import PropTypes from 'prop-types';

import ConditionalMainContent from './components/ConditionalMainContent';

HomeMainSection.propTypes = {
  isLoadingUser: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

function HomeMainSection(props) {
  return (
    <div>
      <div className="row center-xs">
        <div className="form-container">

          <ConditionalMainContent
            isLoadingUser={props.isLoadingUser}
            isUserLogged={props.isUserLogged}
          />

        </div>
      </div>

      <style jsx>{`
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
