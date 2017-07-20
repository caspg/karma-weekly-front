import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withFlashMessages from 'src/hocs/withFlashMessages';
import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

class DeleteUserButton extends Component {
  static propTypes = {
    removeUser: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = { isDeleting: false };
  }

  addSuccessFlashMessage = () => {
    const message = {
      id: Date.now(),
      type: 'success',
      code: 'remove-user-success',
      body: 'Your account was successfully deleted.',
    };

    this.props.addFlashMessage(message);
  }

  handleServerError = () => {
    const message = {
      id: Date.now(),
      type: 'alert',
      code: 'remove-user',
      body: 'There was a server removing your account. Please try again later.',
    };

    this.props.addFlashMessage(message);
    this.setState({ isDeleting: false });
  }

  handleButtonClick = (event) => {
    event.preventDefault();

    if (window.confirm('Are you sure you want to remove your account?')) {
      this.setState({ isDeleting: true });

      this.props.removeUser()
        .then(this.addSuccessFlashMessage)
        .catch(this.handleServerError);
    }
  }

  render() {
    return (
      <ButtonWithSpinner
        className="button alert"
        onClick={this.handleButtonClick}
        isLoading={this.state.isDeleting}
        customStyle={{ minWidth: 180 }}
        spinnerColor="#fff"
      >
        DELETE ACCOUNT
      </ButtonWithSpinner>
    );
  }
}

export default withFlashMessages(DeleteUserButton);
