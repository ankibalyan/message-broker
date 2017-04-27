import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Topics, TopicSchema } from '../schemas';

export const addTopic = new ValidatedMethod({
  name: 'addTopic',
  validate(props) {
    check(props, { name: String });
  },
  run(props) {
    const { name } = props;

    const topicRecord = {
      name
    };

    try {
      Topics.insert(topicRecord);
    } catch (e) {
      throw new Meteor.Error('error-500', 'Internal server error', { method: 'addTopic' });
    }
  }
});
