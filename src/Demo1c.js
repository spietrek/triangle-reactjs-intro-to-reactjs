import React, { Component } from 'react';
import formatDateTime from './utils';

class Demo1c extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      date: new Date()
    });
  };

  render() {
    const { date } = this.state;
    const dateTime = formatDateTime(date);

    return (
      <div>
        <h1>DEMO 1c (BIND)</h1>
        <h2>{dateTime}</h2>
        <button onClick={this.handleClick}>Set Date & Time</button>
      </div>
    );
  }
}

export default Demo1c;
