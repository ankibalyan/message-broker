import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Subscriptions = new Meteor.Collection('subscriptions');

Subscriptions.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Subscriptions.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

// Define the schema
export const SubscriptionSchema = new SimpleSchema({
  _id: {
    type: String,
    label: 'Id',
    max: 200,
  },
  user: {
    type: String,
    label: 'Subscriber',
    max: 200,
    denyUpdate: true,
  },
  topicIds: {
    type: [String],
    label: 'Topic Id'
  },
  active: {
    type: Boolean,
    label: 'Subscriptions status',
    defaultValue: true,
    optional: true
  },
});

Subscriptions.attachSchema(SubscriptionSchema);

// TODO: ensure index
