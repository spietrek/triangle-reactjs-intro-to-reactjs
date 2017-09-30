import React, { Component } from 'react';
import FormattedDateTime from './FormattedDateTime';

class Demo3 extends Component {
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
    return (
      <div>
        <h1>DEMO 3</h1>
        <FormattedDateTime date={date}/>
        <button onClick={this.handleClick}>Set Date & Time</button>
      </div>
    );
  }
}

export default Demo3;
