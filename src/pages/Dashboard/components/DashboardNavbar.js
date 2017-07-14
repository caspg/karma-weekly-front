import React from 'react';
import PropTypes from 'prop-types';

DashboardNavbar.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

function DashboardNavbar(props) {
  return (
    <div className="top-navbar row end-xs">
      {props.isUserLogged && (
        <button
          className="logout-button"
          type="button"
          onClick={props.onLogout}
        >
          Log out
        </button>
      )}

      <style>{`
        .top-navbar {
          min-height: 60px;
        }

        .logout-button {
          cursor: pointer;
          color: #424242;
          margin-right: 50px;
        }

        .logout-button:hover {
          color: black;
        }
      `}</style>
    </div>
  );
}

export default DashboardNavbar;
