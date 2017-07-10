import React, { Component } from 'react';

import getComponentDisplayName from 'src/utils/getComponentDisplayName';

let globalFlashMessages = [];
function updateGlobalMessages(newMessages) {
  globalFlashMessages = newMessages;
}

function withFlashMessages(ComposedComponent) {
  class ComponentWithFlashMessages extends Component {
    static displayName = (
      `${getComponentDisplayName(ComposedComponent)}WithFlashMessages`
    )

    constructor(props) {
      super(props);
      this.state = {
        flashMessages: globalFlashMessages,
      };
    }

    addFlashMessage = (message) => {
      const { id, type, title, body } = message;
      if (!id || !type || !title || !body) {
        throw Error('flash message object does not have required properites.');
      }

      const updatedMessages = globalFlashMessages.concat(message);
      this.updateMessages(updatedMessages);
    }

    removeFlashMessage = (messageId) => {
      const updatedMessages = globalFlashMessages.filter(m => m.id !== messageId);
      this.updateMessages(updatedMessages);
    }

    updateMessages = (updatedMessages) => {
      updateGlobalMessages(updatedMessages);
      this.setState({ flashMessages: updatedMessages });
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          flashMessages={this.state.flashMessages}
          addFlashMessage={this.addFlashMessage}
          removeFlashMessage={this.removeFlashMessage}
        />
      );
    }
  }

  return ComponentWithFlashMessages;
}

export default withFlashMessages;
