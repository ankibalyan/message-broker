import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Welcome from '../screens/Welcome';
import TopicsContainer from '../components/Topics/TopicsContainer';
import MessagesContainer from '../components/Messages/MessagesContainer';
import MessagesPublish from '../components/Messages/MessagesPublish';
import LogIn from '../components/Auth/LogIn';
import SignUp from '../components/Auth/SignUp';

const isAuthenticated = Meteor.userId() !== null;

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props}/>
    )
  )}/>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

const Routes = () => (
  <Router>
    <div>
      <AuthRoute path="/login" component={LogIn}/>
      <AuthRoute path="/signup" component={SignUp}/>

      <Route exact path="/" component={Welcome}/>
      <PrivateRoute path="/topics" component={TopicsContainer}/>
      <PrivateRoute path="/messages" component={MessagesContainer}/>
      <PrivateRoute path="/publish" component={MessagesPublish}/>
    </div>
  </Router>
);

export default Routes;
