import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Topics = new Meteor.Collection('topics');

Topics.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Topics.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

// Define the schema
export const TopicSchema = new SimpleSchema({
  _id: {
    type: String,
    label: 'Id',
    max: 200,
  },
  name: {
    type: String,
    label: 'Message data',
    max: 10000,
  },
});

Topics.attachSchema(TopicSchema);

// TODO: ensure index
