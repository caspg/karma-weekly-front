import React from 'react';
import PropTypes from 'prop-types';

import AppFooter from 'src/components/AppFooter';

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

      <div className="row center-xs">
        <div className="footer-container">
          <AppFooter />
        </div>
      </div>

      <style jsx>{`
        .form-container {
          margin-top: 50px;
          width: 100%;
          max-width: 600px;
          padding: 50px 0;
        }

        .footer-container {
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
}

export default HomeMainSection;
