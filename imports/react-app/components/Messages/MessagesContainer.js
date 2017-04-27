import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../../../api/messages/schemas.js';
import MessagePage from './MessagesPage.js';

export default MessagesContainer = createContainer(() => {
  const messagesHandle = Meteor.subscribe('messages');
  const loading = !messagesHandle.ready();
  const messages = Messages.find().fetch();
  const messageExists = !loading && !!messages;
  return {
    loading,
    messages,
    messageExists,
  };
}, MessagePage);
