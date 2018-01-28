import React, { Component, Fragment } from 'react';

class Demo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  render() {
    const { date } = this.state;
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    const dateTime = `Date is ${formattedDate} and Time is ${formattedTime}.`;

    return (
      <Fragment>
        <h1>DEMO 1</h1>
        <h2>{dateTime}</h2>
      </Fragment>
    );
  }
}

export default Demo1;
