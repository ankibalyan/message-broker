import React, { Component } from 'react';

export default class MessagesPage extends Component {
  renderMessagesList(){
    const { messages } = this.props;
    return messages.map((item) => (
      <div key={item._id} className="message-item">
        <div className="message-heading">
        </div>
        {/* Message Heading */}
        <div className="message-body">
          {item.msg}
        </div>
        <div className="messages-footer">
          {/* by: Ankit Kumar */}
        </div>
      </div>
    ));
  }
  render () {
    return (
      <section className="container section section-messages">
        <h1 className="text-center">Messages</h1>
        {this.renderMessagesList()}
      </section>
    );
  }
}
