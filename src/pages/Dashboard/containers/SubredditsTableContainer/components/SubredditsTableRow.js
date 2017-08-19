import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withFlashMessages from 'src/hocs/withFlashMessages';
import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

class SubredditsTableRow extends Component {
  static propTypes = {
    subreddit: PropTypes.string.isRequired,
    removeSubreddit: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
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
    const { subreddit } = this.props;
    this.setState({ isRemoving: true });

    this.props.removeSubreddit(subreddit)
      .catch(() => {
        this.setState({ isRemoving: false, isOnHover: false });
        const message = {
          id: Date.now(),
          type: 'alert',
          code: `remove-${subreddit}-error`,
          body: `There was a server error removing <strong>${subreddit}</strong> subscription. Please try again later.`,
        };

        this.props.addFlashMessage(message);
      });
  }

  render() {
    const buttonStyle = {
      margin: 0,
      opacity: (this.state.isOnHover || this.state.isRemoving) ? 1 : 0,
      minWidth: 50,
    };

    const subredditUrl = `https://www.reddit.com/r/${this.props.subreddit}`;

    return (
      <tr
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <td className="subreddit-cell">
          <a
            title={subredditUrl}
            href={subredditUrl}
          >
            {this.props.subreddit}
          </a>
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

export default withFlashMessages(SubredditsTableRow);
