import React, { Component } from 'react';

export default class MessagesPage extends Component {
  render () {
    return (
      <div className="messages-wrapper">
        <div className="message-item">
          <div className="message-heading">
          </div>
          Message Heading
          <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="messages-footer">
            by: Ankit Kumar
          </div>
        </div>
      </div>
    );
  }
}
