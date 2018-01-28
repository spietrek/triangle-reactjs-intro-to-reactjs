import React from 'react';
import PropTypes from 'prop-types';

import clockFace from './media/clock-face.svg';
import handHour from './media/hand-hour.svg';
import handMinute from './media/hand-minute.svg';
import handSecond from './media/hand-second.svg';
import spacer from './media/spacer.svg';

const ClockFace = props => {
  const { date } = props;
  const hours = (date.getHours() % 12) * 30;
  const mintutes = date.getMinutes() * 6;
  const seconds = date.getSeconds() * 6;
  return (
    <div>
      <img src={clockFace} style={{ position: 'absolute' }} alt="Clock Face" />
      <img
        src={handHour}
        style={{ position: 'absolute', transform: `rotate(${hours}deg)` }}
        alt="Hand Hour"
      />
      <img
        src={handMinute}
        style={{ position: 'absolute', transform: `rotate(${mintutes}deg)` }}
        alt="Hand Minute"
      />
      <img
        src={handSecond}
        style={{ position: 'absolute', transform: `rotate(${seconds}deg)` }}
        alt="Hand Second"
      />
      <img src={spacer} alt="Spacer" />
    </div>
  );
};

ClockFace.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default ClockFace;
