import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

class SubredditsTableRow extends Component {
  static propTypes = {
    subreddit: PropTypes.string.isRequired,
    removeSubreddit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      isOnHover: false,
      isRemoving: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isOnHover: true });
  }

  handleMouseLeave = () => {
    this.setState({ isOnHover: false });
  }

  handleRemoveSubreddit = () => {
    this.setState({ isRemoving: true });

    // TODO handle errors
    this.props.removeSubreddit(this.props.subreddit);
  }

  render() {
    const buttonStyle = {
      margin: 0,
      opacity: (this.state.isOnHover || this.state.isRemoving) ? 1 : 0,
      minWidth: 50,
    };

    return (
      <tr
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <td className="subreddit-cell">
          {this.props.subreddit}
        </td>

        <td className="remove-button-cell">
          <ButtonWithSpinner
            className="button secondary"
            isLoading={this.state.isRemoving}
            customStyle={buttonStyle}
            onClick={this.handleRemoveSubreddit}
            spinnerColor="#fff"
          >
            &times;
          </ButtonWithSpinner>
        </td>

        <style jsx>{`
          .subreddit-cell {
            text-align: left;
            padding-left: 1.5rem;
          }

          .remove-button-cell {
            text-align: right;
            padding-right: 1.5rem;
          }
        `}</style>
      </tr>
    );
  }
}

export default SubredditsTableRow;
