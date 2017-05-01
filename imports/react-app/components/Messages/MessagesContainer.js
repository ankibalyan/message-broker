import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../../../api/messages/schemas.js';
import MessagePage from './MessagesPage.js';

export default MessagesContainer = createContainer(() => {
  const messagesHandle = Meteor.subscribe('messages');
  const loading = !messagesHandle.ready();
  const messages = Messages.find();
  const messageExists = !loading && !!messages;
  return {
    loading,
    messageExists,
    messages: messageExists? messages.fetch(): [],
  };
}, MessagePage);
