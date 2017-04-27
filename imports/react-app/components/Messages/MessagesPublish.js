import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class MessagesPublish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicId: '',
      msg: ''
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
    const messageData = {
      topicId: this.state.topicId,
      msg: this.state.msg
    };

    // call meteor method
    Meteor.call('sendMessage', messageData);
  }

  render() {
    return (
      <div className="message-publish-wrapper">
          <form className="form messages-form" onSubmit={this.onSubmit}>
            <div className="input-area">
              <select name="topicId" value={this.state.topicId} onChange={this.onChange}>
                <option>topic 1</option>
                <option>topic 2</option>
                <option>topic 3</option>
              </select>
            </div>
            <div className="input-area">
              <textarea name="msg" value={this.state.msg} onChange={this.onChange} />
            </div>
            <button type="submit" className="button button-submit">Publish Mesage</button>
        </form>
      </div>
    );
  }
};
