import React, { Component } from 'react';

import ButtonWithSpinner from 'src/components/ButtonWithSpinner';

class DeleteUserButton extends Component {
  constructor(props) {
    super(props);

    this.state = { isDeleting: false };
  }

  handleButtonClick = (event) => {
    event.preventDefault();
    this.setState({ isDeleting: true });
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

export default DeleteUserButton;
