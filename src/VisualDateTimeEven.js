import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatDateTime from './utils';

class VisualDateTimeEven extends Component {
  shouldComponentUpdate(nextProps) {
    const { date } = nextProps;
    const seconds = date.getSeconds();
    const evenSeconds = seconds % 2 === 0;
    return evenSeconds;
  }

  render() {
    const { date } = this.props;
    const dateTime = formatDateTime(date);
    return <h2>{dateTime}</h2>;
  }
}

VisualDateTimeEven.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default VisualDateTimeEven;
