import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'react-apollo';
import Router from 'next/router';

import routes from 'src/config/routes';
import withApollo from 'src/hocs/withApollo';
import withLoggedUser from 'src/hocs/withLoggedUser';
import withLogout from 'src/hocs/withLogout';
import withFlashMessages from 'src/hocs/withFlashMessages';

import DashboardLayout from './components/DashboardLayout';
import withAddSubredditMutation from './graphql/withAddSubredditMutation';

class Dashboard extends Component {
  static propTypes = {
    isLoadingUser: PropTypes.bool.isRequired,
    isUserLogged: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    addSubreddit: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { isValidatingUser: true };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.isValidatingUser || nextProps.isLoadingUser) return;

    if (!nextProps.isUserLogged) {
      const message = {
        id: Date.now(),
        type: 'alert',
        body: 'You need to login to manage your subscriptions.',
        code: 'dashboard-unlogged-user',
      };

      this.setState({ isValidatingUser: false }, () => {
        this.props.addFlashMessage(message);
        Router.push(routes.home);
      });
    }
  }

  handleSubreddit = async (subreddit) => {
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
      <DashboardLayout
        isLoadingUser={this.props.isLoadingUser}
        isUserLogged={this.props.isUserLogged}
        onLogout={this.props.logout}
        onAddSubreddit={this.handleSubreddit}
      />
    );
  }
}

export default compose(
  withApollo,
  withLoggedUser,
  withLogout,
  withFlashMessages,
  withAddSubredditMutation,
)(Dashboard);
