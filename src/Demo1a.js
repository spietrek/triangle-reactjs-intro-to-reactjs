import React, { Component } from 'react';
import formatDateTime from './utils';

class Demo1a extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  render() {
    const { date } = this.state;
    const dateTime = formatDateTime(date);

    return (
      <div>
        <h1>DEMO 1a</h1>
        <h2>{dateTime}</h2>
      </div>
    );
  }
}

export default Demo1a;
