import React from 'react';
import styled from 'styled-components/native';
import TextSwitcher from '../components/ButtonWow';
import Logo from '../components/Logo';

const CustomTopBar2 = ({ title }) => {
  return (
    <Container>
      <LinedLogo>
        <Lefted><Logo/></Lefted>
        <Title>{title}</Title>
      </LinedLogo>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  background-color: #5c16c4;
  height: 150px;
  width: 100%;
  position: absolute;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const LinedLogo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Lefted = styled.View`
  position: absolute;
  left: -90px;
  top: 30px;
`;

export default CustomTopBar2;
