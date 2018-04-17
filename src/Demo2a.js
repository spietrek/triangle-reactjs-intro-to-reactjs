import React, { Component } from 'react';
import VisualDateTime from './VisualDateTime';

class Demo2a extends Component {
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
        <h1>DEMO 2a</h1>
        <VisualDateTime date={date} />
        <button onClick={this.handleClick}>Set Date & Time</button>
      </div>
    );
  }
}

export default Demo2a;
