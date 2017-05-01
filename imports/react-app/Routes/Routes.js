import { Meteor } from 'meteor/meteor';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Welcome from '../screens/Welcome';
import TopicsContainer from '../components/Topics/TopicsContainer';
import TopicAdd from '../components/Topics/TopicAdd';
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
    <MainLayout>
      <AuthRoute path="/login" component={LogIn}/>
      <AuthRoute path="/signup" component={SignUp}/>

      <Route exact path="/" render={
        (props) => {
          // if (isAuthenticated) {
          //   return <MessagesContainer {...props} />
          // }
          return <Welcome {...props} />
        }
      }
    />
      <PrivateRoute exact path="/topics" component={TopicsContainer}/>
      <PrivateRoute exact path="/topics/add" component={TopicAdd}/>
      <PrivateRoute exact path="/messages" component={MessagesContainer}/>
      <PrivateRoute exact path="/publish" component={MessagesPublish}/>
    </MainLayout>
  </Router>
);

export default Routes;
