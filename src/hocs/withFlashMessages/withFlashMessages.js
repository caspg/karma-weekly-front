import React, { Component } from 'react';

import getComponentDisplayName from 'src/utils/getComponentDisplayName';

/**
 * used to generate uniqe id for listeners handlers
 */
let uidCounter = 0;
function uid() {
  uidCounter += 1;
  return uidCounter;
}

function createFlashMessagesStore() {
  let flashMessages = [];
  let listeners = [];

  function getMessages() {
    return flashMessages;
  }

  function subscribe(listener) {
    listeners.push(listener);
  }

  function unsubscribe(key) {
    const filteredListeners = listeners.filter(f => f.key !== key);
    listeners = filteredListeners;
  }

  function publish() {
    listeners.forEach((listener) => { listener.handler(flashMessages); });
  }

  function addMessage(message) {
    if (!flashMessages.find(m => m.code === message.code)) {
      flashMessages.push(message);
      publish();
    }
  }

  function removeMessage(messageId) {
    const filteredMessages = flashMessages.filter(m => m.id !== messageId);
    flashMessages = filteredMessages;
    publish();
  }

  return { subscribe, unsubscribe, getMessages, addMessage, removeMessage };
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
