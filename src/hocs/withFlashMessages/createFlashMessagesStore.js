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

export default createFlashMessagesStore;
