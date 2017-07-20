import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import PropTypes from 'prop-types';

import USER_SUBREDDITS_QUERY from 'src/graphql/queries/userSubreddits';
import colors from 'src/styles/colors';
import Spinner from 'src/components/Spinner';

import SubredditsTable from './components/SubredditsTable';
import withRemoveSubredditMutation from './graphql/withRemoveSubredditMutation';

class SubredditsTableContainer extends Component {
  static propTypes = {
    removeSubreddit: PropTypes.func.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      user: PropTypes.shape({
        subreddits: PropTypes.arrayOf(PropTypes.string),
      }),
    }).isRequired,
  }

  handleRemoveSubreddit = async (subreddit) => {
    const { data } = await this.props.removeSubreddit(subreddit);

    if (!data || data.removeSubreddit.status !== 200) {
      throw Error('There was a server error');
    }
  }

  render() {
    if (this.props.data.loading) {
      return <Spinner mainColor={colors.orange} radius="8em" />;
    }

    const subreddits = this.props.data.user.subreddits || [];

    return (
      <SubredditsTable
        removeSubreddit={this.handleRemoveSubreddit}
        subreddits={subreddits}
      />
    );
  }
}

const withUserSubredditsQuery = graphql(USER_SUBREDDITS_QUERY);

export default compose(
  withRemoveSubredditMutation,
  withUserSubredditsQuery,
)(SubredditsTableContainer);
