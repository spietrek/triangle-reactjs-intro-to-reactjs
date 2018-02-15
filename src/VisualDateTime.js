import React from 'react';
import PropTypes from 'prop-types';
import formatDateTime from './utils';

const VisualDateTime = props => {
  const { date } = props;
  const dateTime = formatDateTime(date);
  return <h2>{dateTime}</h2>;
};

VisualDateTime.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default VisualDateTime;
