import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Subscriptions, SubscriptionSchema } from '../schemas';

export const subscribeToTopic = new ValidatedMethod({
  name: 'subscribeToTopic',
  validate(props) {
    check(props, {
      topicId: String,
    });
  },
  run(props) {
    const { topicId } = props;
    if (!this.userId) {
      throw new Meteor.Error('error-not-authorized', 'User need to login', { method: 'subscribeToTopic' });
    }

    // get user's subscription list if exist otherwise add new.
    const subscriptions = Subscriptions.findOne({ user: this.userId })

    if(subscriptions) {
      // TODO check if user is already subscribed to this
      try {
        Subscriptions.update({ _id: subscriptions._id }, {$push: { topicIds: topicId } });
      } catch (e) {
        throw new Meteor.Error('error-500', 'Internal server error', { method: 'subscribeToTopic' });
      }
    } else {
      const subRecord = {
        user: this.userId,
        topicIds: [topicId],
      };

      try {
        Subscriptions.insert(subRecord);
      } catch (e) {
        throw new Meteor.Error('error-500', 'Internal server error', { method: 'subscribeToTopic' });
      }
    }
  }
});
