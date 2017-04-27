import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from '../screens/Welcome';
import TopicsContainer from '../components/Topics/TopicsContainer';
import MessagesContainer from '../components/Messages/MessagesContainer';
import MessagesPublish from '../components/Messages/MessagesPublish';
import LogIn from '../components/Auth/LogIn';
import SignUp from '../components/Auth/SignUp';

const isAuthenticated = Meteor.userId() !== null;

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/topics" component={TopicsContainer}/>
      <Route exact path="/messages" component={MessagesContainer}/>
      <Route exact path="/publish" component={MessagesPublish}/>
      <Route exact path="/login" component={LogIn}/>
      <Route exact path="/signup" component={SignUp}/>
    </div>
  </Router>
);

export default Routes;
