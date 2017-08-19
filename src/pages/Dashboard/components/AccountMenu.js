import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DeleteUserContainer from '../containers/DeleteUserContainer';

class AccountMenu extends Component {
  static propTypes = {
    userEmail: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      shouldRenderLinks: false,
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillReceiveProps() {
    this.setState({ shouldRenderLinks: false });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (!this.state.shouldRenderLinks) {
      return;
    }

    const shouldClose = !this.linksContainer.contains(event.target) &&
      !this.hamburgerButton.contains(event.target);

    if (shouldClose) {
      this.setState({ shouldRenderLinks: false });
    }
  }

  handleButtonClick = () => {
    this.setState({ shouldRenderLinks: !this.state.shouldRenderLinks });
  }

  render() {
    return (
      <div className="local-container">
        <button
          onClick={this.handleButtonClick}
          className="trigger-button"
          ref={(e) => { this.hamburgerButton = e; }}
        >
          My account
        </button>

        {this.state.shouldRenderLinks && (
          <div
            className="menu-items-container"
            ref={(e) => { this.linksContainer = e; }}
          >
            <ul className="menut-items-list">
              <li className="menu-item">
                <div className="user-email">
                  {this.props.userEmail}
                </div>
              </li>

              <li className="menu-item">
                <DeleteUserContainer />
              </li>
            </ul>
          </div>
        )}

        <style jsx>{`
          .local-container {
            margin-right: 15px;
          }

          .trigger-button {
            cursor: pointer;
            color: #424242;
            outline: none !important;
          }

          .trigger-button:hover {
            color: black;
          }

          .menu-items-container {
            background-color: white;
            position: absolute;
            top: 100%;
            right: 0;
            min-width: 180px;
            z-index: 10;

            border: 1px solid #ddd;
          }

          .menut-items-list {
            list-style-type: none;
            margin: 0;
          }

          .menu-item {
            text-align: left;
            border-bottom: 1px solid #ddd;
          }

          .user-email {
            padding: 15px 1em;
            text-align: center;
            color: #424242;
          }
        `}</style>
      </div>
    );
  }
}

export default AccountMenu;
