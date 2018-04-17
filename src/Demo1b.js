import React, { Component } from 'react';
import formatDateTime from './utils';

class Demo1b extends Component {
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
        <h1>DEMO 1b (INLINE)</h1>
        <h2>{dateTime}</h2>
        <button onClick={() => this.setState({ date: new Date() })}>
          Set Date & Time
        </button>
      </div>
    );
  }
}

export default Demo1b;
