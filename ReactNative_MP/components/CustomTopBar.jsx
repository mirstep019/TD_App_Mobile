import React from 'react';
import styled from 'styled-components/native';
import TextSwitcher from '../components/ButtonWow';
const CustomTopBar = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TextSwitcher options={['Option 1', 'Option 2']}/>
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
`;

const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export default CustomTopBar;

