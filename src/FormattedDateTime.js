import React from 'react';
import PropTypes from 'prop-types';

const FormattedDateTime = (props) => {
  const { date } = props;
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  const dateTime = `Date is ${formattedDate} and Time is ${formattedTime}.`;
  return (
    <h2>{dateTime}</h2>
  );
};

FormattedDateTime.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default FormattedDateTime;
