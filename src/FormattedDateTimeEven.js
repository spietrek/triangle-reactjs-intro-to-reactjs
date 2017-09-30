import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormattedDateTimeEven extends Component {
  shouldComponentUpdate(nextProps) {
    const { date } = nextProps;
    const seconds = date.getSeconds();
    const evenSeconds = seconds % 2 === 0;
    return evenSeconds;
  }

  render() {
    const { date } = this.props;
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();
    const dateTime = `Date is ${formattedDate} and Time is ${formattedTime}.`;
    return (
      <h2>{dateTime}</h2>
    );
  }
}

FormattedDateTimeEven.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default FormattedDateTimeEven;
