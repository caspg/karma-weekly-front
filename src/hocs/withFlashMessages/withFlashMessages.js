import React, { Component } from 'react';

import getComponentDisplayName from 'src/utils/getComponentDisplayName';

let globalFlashMessages = [
  // { id: 1, type: 'success', message: { title: 'Message title', body: 'Lorem ipsum dolor elo.' } },
  // { id: 2, type: 'alert', message: { title: 'Alert Message title', body: 'Lorem ipsum dolor elo.' } },
];
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
      // TODO validate message object!
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
