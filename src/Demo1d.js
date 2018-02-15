import React, { Component, Fragment } from 'react';
import formatDateTime from './utils';

class Demo1d extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
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
      <Fragment>
        <h1>DEMO 1d (ARROW)</h1>
        <h2>{dateTime}</h2>
        <button onClick={this.handleClick}>Set Date & Time</button>
      </Fragment>
    );
  }
}

export default Demo1d;
