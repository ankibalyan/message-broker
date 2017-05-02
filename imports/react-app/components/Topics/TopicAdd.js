import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class TopicAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    const params = {
      name
    };

    // call meteor method
    Meteor.call('addTopic', params);
  }

  render() {
    return (
      <section className="container section section-publish">
        <h1 className="text-center">Add a new Topic</h1>
          <form className="form messages-form" onSubmit={this.onSubmit}>
            <div className="input-area">
              <input className="input-text" name="name" onChange={this.onChange} />
            </div>
            <button type="submit" className="button button-submit">Add Topic</button>
        </form>
      </section>
    );
  }
};
