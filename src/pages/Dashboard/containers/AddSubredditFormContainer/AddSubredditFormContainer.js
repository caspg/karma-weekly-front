import React, { Component } from 'react';

import redditService from 'src/services/redditService';

import AddSubredditForm from './components/AddSubredditForm';

class AddSubredditFormContainer extends Component {
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
    const subreddit = this.state.subreddit.trim();

    try {
      const isValidSubreddit = await redditService.verifySubreddit(subreddit);

      if (!isValidSubreddit) {
        this.validationError(subreddit);
        return;
      }

      console.log(subreddit, ' is valid');
    } catch (e) {
      this.internalError();
    }
  }

  render() {
    return (
      <AddSubredditForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        subreddit={this.state.subreddit}
        isSubmitting={this.state.isSubmitting}
        error={this.state.error}
      />
    );
  }
}

export default AddSubredditFormContainer;
