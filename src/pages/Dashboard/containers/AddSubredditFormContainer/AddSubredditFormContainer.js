import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';

import AddSubredditForm from './components/AddSubredditForm';

class AddSubredditFormContainer extends Component {
  static propTypes = {
    addSubreddit: PropTypes.func.isRequired,
  }

  handleAddSubreddit = async (subreddit) => {
    // TODO: handle errors
    // TODO maybe move this to AddSubredditFormContainer (??)

    try {
      const { data } = await this.props.addSubreddit(subreddit);

      if (!data || data.addSubreddit.status !== 200) {
        console.log('There was an error: ', data);
      } else {
        console.log('success');
      }
    } catch (e) {
      console.log('Server error: ', e);
    }
  }

  render() {
    return (
      <AddSubredditForm onAddSubreddit={this.handleAddSubreddit} />
    );
  }
}

const ADD_SUBREDDIT_MUTATION = gql`
  mutation addSubreddit($subreddit: String!) {
    addSubreddit(subreddit: $subreddit) {
      error
      status
    }
  }
`;

const withAddSubredditMutation = graphql(ADD_SUBREDDIT_MUTATION, {
  props: ({ mutate }) => ({
    addSubreddit: subreddit => mutate({ variables: { subreddit } }),
  }),
});

export default withAddSubredditMutation(AddSubredditFormContainer);
