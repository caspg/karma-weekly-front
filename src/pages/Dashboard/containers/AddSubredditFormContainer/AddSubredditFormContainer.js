import React, { Component } from 'react';

import AddSubredditForm from './components/AddSubredditForm';

class AddSubredditFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: '',
    };
  }

  handleChange = (event) => {
    this.setState({ subreddit: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.subreddit);
  }

  render() {
    return (
      <AddSubredditForm
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
        subreddit={this.state.subreddit}
      />
    );
  }
}

export default AddSubredditFormContainer;
