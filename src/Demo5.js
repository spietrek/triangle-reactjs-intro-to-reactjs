import React, { Component, Fragment } from 'react';
import ClockFace from './ClockFace';

class Demo5 extends Component {
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
      <Fragment>
        <h1>DEMO 5</h1>
        <ClockFace date={date} />
      </Fragment>
    );
  }
}

export default Demo5;
