import React, { Component } from 'react';
import PropTypes from 'prop-types';

import redditService from 'src/services/redditService';

import AddSubredditFormContent from './AddSubredditFormContent';

class AddSubredditForm extends Component {
  static propTypes = {
    onAddSubreddit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      subreddit: '',
      error: undefined,
      isSubmitting: false,
    };
  }

  setError = (msg) => {
    this.setState({ error: msg });
  }

  handleChange = (event) => {
    this.setState({ subreddit: event.target.value });
  }

  validationError = (subreddit) => {
    const msg = `<strong>r/${subreddit}</strong> does not exist. Please check the name and submit again.`;
    this.setError(msg);
  }

  internalError = () => {
    const msg = 'There was some internal error. Please try again later.';
    this.setError(msg);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isSubmitting: true });

    const subreddit = this.state.subreddit.trim();

    // TODO: validate subreddit name client side
    //   * subreddit can't be empty
    //   * subreddit can't be already in the list

    try {
      const isValidSubreddit = await redditService.verifySubreddit(subreddit);

      if (!isValidSubreddit) {
        this.validationError(subreddit);
        return;
      }

      await this.props.onAddSubreddit(subreddit);
      this.setState({ subreddit: '', isSubmitting: false });
    } catch (e) {
      this.internalError();
      this.setState({ isSubmitting: false });
    }
  }

  render() {
    return (
      <AddSubredditFormContent
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        subreddit={this.state.subreddit}
        isSubmitting={this.state.isSubmitting}
        error={this.state.error}
      />
    );
  }
}

export default AddSubredditForm;
