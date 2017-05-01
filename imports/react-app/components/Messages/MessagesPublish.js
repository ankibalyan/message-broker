import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class MessagesPublish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topicId: '',
      topics: [],
      msg: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    // fetch data
    Meteor.call('getTopics',(err, res) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          topics: res || [],
          topicId: res.length ? res[0]._id : '',
        });
      }
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const topicId = this.state.topicId._str || this.state.topicId;
    const messageData = {
      topicId,
      msg: this.state.msg
    };

    // call meteor method
    Meteor.call('sendMessage', messageData);
  }

  render() {
    const { topics, topicId, msg } = this.state;

    return (
      <div className="message-publish-wrapper">
          <form className="form messages-form" onSubmit={this.onSubmit}>
            <div className="input-area">
              <select name="topicId" value={topicId} onChange={this.onChange}>
                {topics.map((topic) => <option key={topic._id} value={topic._id}>{topic.name}</option>)}
              </select>
            </div>
            <div className="input-area">
              <textarea name="msg" value={msg} onChange={this.onChange} />
            </div>
            <button type="submit" className="button button-submit">Publish Mesage</button>
        </form>
      </div>
    );
  }
};
