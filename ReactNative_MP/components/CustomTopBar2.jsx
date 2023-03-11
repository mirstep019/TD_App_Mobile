import React from 'react';
import styled from 'styled-components/native';
import TextSwitcher from '../components/ButtonWow';
import Logo from '../components/Logo';
import { Ionicons } from '@expo/vector-icons';

const CustomTopBar2 = ({ title, title2, onPressBack }) => {

  return (
    <Container>
      <BackButton onPress={onPressBack}>
        <BackContainer>
          <Ionicons name="chevron-back" size={24} color="white" />
          <BackText>Back</BackText>
        </BackContainer>
      </BackButton>
      <Title>{title}</Title>
      <Title2>{title2}</Title2>
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

const BackContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 40px;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 35px;
`;
const Title2 = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
`;

const BackText = styled.Text`
  color: #fff;
  font-size: 18px;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 16px;
  top: 60px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default CustomTopBar2;
