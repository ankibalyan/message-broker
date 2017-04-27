import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Messages = new Meteor.Collection('messages');

Messages.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Messages.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

// Define the schema
export const MessageSchema = new SimpleSchema({
  _id: {
    type: String,
    label: 'Id',
    max: 200,
  },
  user: {
    type: String,
    label: 'Publisher',
    max: 200,
    denyUpdate: true,
  },
  topicId: {
    type: String,
    label: 'Topic Id',
    max: 200
  },
  msg: {
    type: String,
    label: 'Message',
    max: 10000,
  },
  ts: {
    type: Date,
    label: 'Messages timestamp',
    autoValue() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      }

      return this.unset();  // Prevent user from supplying their own value
    },
    optional: true,
  },
});

Messages.attachSchema(MessageSchema);

// TODO: ensure index
