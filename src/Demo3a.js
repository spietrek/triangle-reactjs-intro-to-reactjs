import React, { Component } from 'react';
import VisualAnalogClock from './VisualAnalogClock';

class Demo3a extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  componentWillMount() {
    const intervalId = setInterval(() => this.timer(), 1000);
    this.setState({
      intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { date } = this.state;

    return (
      <div>
        <h1>DEMO 3a</h1>
        <VisualAnalogClock date={date} />
      </div>
    );
  }
}

export default Demo3a;
