import { Meteor } from 'meteor/meteor';
import { Topics } from '../schemas';

Meteor.publish('topics', function () {
  return Topics.find({}, fields: { name: 1 });
});
