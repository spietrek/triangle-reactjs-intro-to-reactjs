import React, { Component } from 'react';
import VisualDateTimeEven from './VisualDateTimeEven';

class Demo3b extends Component {
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
        <h1>DEMO 3b</h1>
        <VisualDateTimeEven date={date} />
      </div>
    );
  }
}

export default Demo3b;
