import React, { Component } from 'react';

import getComponentDisplayName from 'src/utils/getComponentDisplayName';

import createFlashMessagesStore from './createFlashMessagesStore';

/**
 * used to generate uniqe id for listeners handlers
 */
let uidCounter = 0;
function uid() {
  uidCounter += 1;
  return uidCounter;
}

const flashMessagesStore = createFlashMessagesStore();

function withFlashMessages(ComposedComponent) {
  class ComponentWithFlashMessages extends Component {
    static displayName = (
      `${getComponentDisplayName(ComposedComponent)}WithFlashMessages`
    )

    constructor(props) {
      super(props);
      this.state = {
        flashMessages: flashMessagesStore.getMessages(),
        uniqueKey: uid(),
      };
    }

    componentDidMount() {
      const key = this.state.uniqueKey;
      const handler = (flashMessages) => { this.setState({ flashMessages }); };
      flashMessagesStore.subscribe({ key, handler });
    }

    componentWillUnmount() {
      flashMessagesStore.unsubscribe(this.state.uniqueKey);
    }

    addFlashMessage = (message) => {
      ['id', 'type', 'body', 'code'].forEach((property) => {
        if (!message[property]) {
          throw Error(`flash message object does not have required propert: "${property}".`);
        }
      });

      flashMessagesStore.addMessage(message);
    }

    removeFlashMessage = (messageId) => {
      flashMessagesStore.removeMessage(messageId);
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
