import React, { Component, Fragment } from 'react';

class Demo2 extends Component {
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
        <h1>DEMO 2a (INLINE)</h1>
        <h2>{dateTime}</h2>
        <button onClick={() => this.setState({ date: new Date() })}>
          Set Date & Time
        </button>
      </Fragment>
    );
  }
}

export default Demo2;
