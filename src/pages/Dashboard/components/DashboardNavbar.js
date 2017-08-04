import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

import AccountMenu from './AccountMenu';

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
      <div className="top-navbar row middle-xs">
        <div className="col-xs-4">
          <div className="row start-xs middle xs">
            <h3 className="site-title">Karma Weekly</h3>
          </div>
        </div>

        <div className="col-xs-8">
          {this.props.isUserLogged && (
            <div className="row end-xs middle-xs">
              <AccountMenu />

              <ButtonWithSpinner
                className="logout-button"
                onClick={this.handleLogoutClick}
                isLoading={this.state.isLoggingOut}
                customStyle={{ marginRight: 0 }}
              >
                Log out
              </ButtonWithSpinner>
            </div>
          )}
        </div>

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
            border-bottom: 1px solid #ddd;
            position: relative;
            padding-left: 50px;
            padding-right: 50px;
            background-color: white;
          }

          .site-title {
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default DashboardNavbar;
