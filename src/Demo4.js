import React, { Component, Fragment } from 'react';
import FormattedDateTime from './FormattedDateTime';

class Demo4 extends Component {
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
        <h1>DEMO 4</h1>
        <FormattedDateTime date={date} />
      </Fragment>
    );
  }
}

export default Demo4;
