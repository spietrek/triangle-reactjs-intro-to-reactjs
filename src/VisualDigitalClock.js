import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import moment from 'moment';

const StyledAppContainer = styled.div`
  position: relative;
  margin: auto;
  line-height: 1.5;
`;

const StyledContainer = styled.div`
  margin-top: 50px;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledBlock = styled.div`
  font-family: 'Orbitron', cursive;
  width: 15vw;
  padding: 4vw 2vw;
  margin: 0 3vw;
  font-size: 5vw;
  text-align: center;
  vertical-align: middle;
  border-radius: 1rem;
  background-color: ${props => props.theme};
  // animation: ${rotate360} 5s linear infinite;
`;

const StyledBlock2 = styled(StyledBlock)`
  font-size: 5vw;
`;

const theme = {
  day: '#7D53DE',
  hour: '#011627',
  min: '#F71735',
  sec: '#BAA898',
  ampm: '#FF9F1C'
};

const VisualDigitalClock = props => {
  const { date } = props;
  const day = moment(date).format('dd');
  const hour = moment(date).format('hh');
  const min = moment(date).format('mm');
  const sec = moment(date).format('ss');
  const ampm = moment(date).format('A');
  return (
    <StyledAppContainer>
      <StyledContainer>
        <StyledBlock2 theme={theme.day}>{day}</StyledBlock2>
        <StyledBlock theme={theme.hour}>{hour}</StyledBlock>
        <StyledBlock theme={theme.min}>{min}</StyledBlock>
        <StyledBlock theme={theme.sec}>{sec}</StyledBlock>
        <StyledBlock theme={theme.ampm}>{ampm}</StyledBlock>
      </StyledContainer>
    </StyledAppContainer>
  );
};

VisualDigitalClock.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default VisualDigitalClock;
