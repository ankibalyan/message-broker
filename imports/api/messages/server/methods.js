import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Messages, MessageSchema } from '../schemas';

export const sendMessage = new ValidatedMethod({
  name: 'sendMessage',
  validate(props) {
    check(props, {
      user: String,
      topicId: String,
      msg: String,
    });
  },
  run(props) {
    const { msg, topicId } = props;

    const msgRecord = {
      user: '',
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
