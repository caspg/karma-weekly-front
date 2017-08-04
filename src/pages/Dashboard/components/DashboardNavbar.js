import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

class DashboardNavbar extends Component {
  static propTypes = {
    isUserLogged: PropTypes.bool.isRequired,
    onLogout: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { isLoggingOut: false };
  }

  handleLogoutClick = () => {
    this.setState({ isLoggingOut: true });
    this.props.onLogout();
  }

  render() {
    return (
      <div className="top-navbar row end-xs">
        {this.props.isUserLogged && (
          <ButtonWithSpinner
            className="logout-button"
            onClick={this.handleLogoutClick}
            isLoading={this.state.isLoggingOut}
          >
            Log out
          </ButtonWithSpinner>
        )}

        <style>{`
          .logout-button {
            cursor: pointer;
            color: #424242;
            margin-right: 50px;
            min-width: 90px;
          }

          .logout-button:hover {
            color: black;
          }
        `}</style>

        <style jsx>{`
          .top-navbar {
            min-height: 60px;
          }
        `}</style>
      </div>
    );
  }
}

export default DashboardNavbar;
