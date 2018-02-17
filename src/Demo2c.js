import React, { Component, Fragment } from 'react';
import Interval from './Interval';
import VisualAnalogClock from './VisualAnalogClock';
import VisualDigitalClock from './VisualDigitalClock';

class Demo2c extends Component {
  constructor(props) {
    super(props);

    this.state = {
      enabled: true,
      callback: this.timer,
      date: new Date()
    };
  }

  timer = () => {
    this.setState({
      date: new Date()
    });
  };

  render() {
    const { enabled, callback, date } = this.state;

    return (
      <Fragment>
        <Interval enabled={enabled} callback={callback} timeout={1000} />
        <h1>DEMO 2c</h1>
        <VisualAnalogClock date={date} />
        <VisualDigitalClock date={date} />
      </Fragment>
    );
  }
}

export default Demo2c;
