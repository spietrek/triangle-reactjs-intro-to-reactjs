import React, { Component } from 'react';

class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    const dateTime = `Date is ${formattedDate} and Time is ${formattedTime}.`;
    return (
      <div>
        <h1>DEMO 2</h1>
        <h2>{dateTime}</h2>
        <button onClick={this.handleClick}>Set Date & Time</button>
      </div>
    );
  }
}

export default Demo2;
