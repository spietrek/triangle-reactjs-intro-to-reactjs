import React, { Component, Fragment } from 'react';

class Demo2a extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log('Steve');
    window.print();
  };

  render() {
    const { date } = this.state;
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    const dateTime = `Date is ${formattedDate} and Time is ${formattedTime}.`;

    return (
      <Fragment>
        <h1>DEMO 2 (BIND)</h1>
        <h2>{dateTime}</h2>
        <button onClick={this.handleClick}>Set Date & Time</button>
      </Fragment>
    );
  }
}

export default Demo2a;
