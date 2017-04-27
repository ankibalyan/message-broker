import { Meteor } from 'meteor/meteor';
import { Messages } from '../schemas';

Meteor.publish('messages', function () {
  if (!this.userId) {
    throw new Meteor.Error('error-not-authorized', 'User need to login', { method: 'sendMessage' });
  }

  // get current user's subscribed topics
  const subscriptions = Subscriptions.findOne({ user: this.userId }) || [];

  return Messages.find({ topicId: { $in: subscriptions.topicIds } }, fields: { msg: 1, topicId: 1 });
});
