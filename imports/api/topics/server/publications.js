import { Meteor } from 'meteor/meteor';
import { Topics } from '../schemas';

Meteor.publish('topics', function () {
  return Topics.find({}, { fields: { _id: 1, name: 1 } });
});
