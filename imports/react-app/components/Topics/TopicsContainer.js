import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Topics } from '../../../api/topics/schemas.js';
import TopicsPage from './TopicsPage.js';

export default TopicsContainer = createContainer(() => {
  const topicsHandle = Meteor.subscribe('topics');
  const loading = !topicsHandle.ready();
  const topics = Topics.find();
  const topicExists = !loading && !!topics;
  return {
    loading,
    topicExists,
    topics: topicExists ? topics.fetch() : []
  };
}, TopicsPage);
