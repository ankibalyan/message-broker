import React, { Component } from 'react';

export default class TopicsPage extends Component {
  constructor(props) {
    super(props);
  }

  onSubscribe(objId) {
    const topicId = objId._str || objId;
    const params = {
      topicId
    };

    console.log(params);

    Meteor.call('subscribeToTopic', params, function(err, res) {
      if(err) {
        console.log(err);
      } else {
        console.log(res);
      }
    });
  }

  renderItem() {
    const { topics } = this.props;
    console.log(topics);
    return topics.map((item) => (
      <div key={item._id} className="topics-item">
        <div className="topics-text">
          {item.name}
        </div>
        <div className="topics-options">
          <button className="button" onClick={() => this.onSubscribe(item._id)}>Subscribe</button>
        </div>
      </div>
    ));
  }

  render () {
    console.log(this.props);
    return (
      <section className="container section section-topics">
        <h1 className="text-center">Topics to subscribe</h1>
        {this.renderItem()}
      </section>
    );
  }
}
