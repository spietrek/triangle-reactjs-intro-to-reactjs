import React, { Component } from 'react';
import Interval from './Interval';
import VisualDateTimeEven from './VisualDateTimeEven';

class Demo3b extends Component {
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
      <div>
        <Interval enabled={enabled} callback={callback} timeout={1000} />
        <h1>DEMO 3b</h1>
        <VisualDateTimeEven date={date} />
      </div>
    );
  }
}

export default Demo3b;
