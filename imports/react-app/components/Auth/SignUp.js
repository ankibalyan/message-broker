import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      redirect: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };

    Meteor.call('registerUser', credentials, (err, res) => {
      if(err) {
        console.log(err);
      }

      Meteor.loginWithPassword(credentials.username, credentials.password, (loginError, loginRes) => {
        if(err) {
          console.log(loginError);
        }

        this.state.setState({
          redirect: true
        });

      });
    });
  }

  render() {
    const { username, password, redirect } = this.state;

    if(redirect) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div>
        <h1>Get register with us</h1>
        <form className="form signup-form" onSubmit={this.onSubmit}>
          <div className="input-area">
            <input className="input-text" type="text" name="username" value={username} onChange={this.onChange} />
          </div>
          <div className="input-area">
            <input className="input-password" type="password" name="password" value={password} onChange={this.onChange} />
          </div>
          <button type="submit" className="button button-submit">SignUp</button>
        </form>
      </div>
    );
  }
}
