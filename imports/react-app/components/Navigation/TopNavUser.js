import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { Link, Redirect } from 'react-router-dom';

const isAuthenticated = Meteor.userId() !== null;

export default class TopNavUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    console.log('handleLogout');
    e.preventDefault();

    Meteor.logout((error, result) => {
      if (error) {
        console.log("User Logout Error: ", error);
      } else {
        this.setState({
          redirect: true
        });
        console.log("User Logout Successfull");
      }
    });
  }

  renderLinks() {
    const { redirect } = this.state;

    if (redirect){
      return (
        <Redirect to="/"/>
      );
    }

    if (isAuthenticated) {
      return (
        <ul className="nav-menu">
          <li><Link to="/messages">Messages</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/publish">Publish Messages</Link></li>
          <li><Link to="/topics/add">Add Topics</Link></li>
          <li><a onClick={this.handleLogout}>Logout</a></li>
        </ul>
      );
    } else {
      return (
        <ul className="nav-menu">
          <li><Link to="/login">Login</Link></li>
        </ul>
      );
    }

    return;
  }

  render() {
    let links;
    return(
      <div>
        {this.renderLinks()}
      </div>
    );
  }
};
