import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Messages, MessageSchema } from '../schemas';

export const sendMessage = new ValidatedMethod({
  name: 'sendMessage',
  validate(props) {
    check(props, {
      topicId: String,
      msg: String,
    });
  },
  run(props) {
    const { msg, topicId } = props;

    if (!this.userId) {
      throw new Meteor.Error('error-not-authorized', 'User need to login', { method: 'sendMessage' });
    }

    const msgRecord = {
      user: this.userId,
      topicId,
      msg
    };

    try {
      Messages.insert(msgRecord);
    } catch (e) {
      throw new Meteor.Error('error-500', 'Internal server error', { method: 'sendMessage' });
    }
  }
});
