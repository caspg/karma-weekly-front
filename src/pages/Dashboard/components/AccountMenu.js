import React, { Component } from 'react';

import DeleteUserContainer from '../containers/DeleteUserContainer';

class AccountMenu extends Component {
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
            min-width: 180px;
            z-index: 10;

            border: 1px solid #ddd;
          }

          .menut-items-list {
            list-style-type: none;
            margin: 0;
            padding-top: 20px;
          }

          .menu-item {
            border-top: 1px solid #ddd;
          }
        `}</style>
      </div>
    );
  }
}

export default AccountMenu;
