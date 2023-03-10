import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Animated } from 'react-native';

const TextSwitcher = () => {
  const [position, setPosition] = useState(4);
  const animation = useRef(new Animated.Value(4)).current;

  const leftClick = () => {
    Animated.timing(animation, {
      toValue: 4,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setPosition(4);
  };

  const rightClick = () => {
    Animated.timing(animation, {
      toValue: 256,
      duration: 250,
      useNativeDriver: true,
    }).start();
    setPosition(100);
  };

  const translateX = animation.interpolate({
    inputRange: [4, 120],
    outputRange: [0, 70],
  });

  return (
    <Container>
      <ButtonBox>
        <ButtonContainer style={{ transform: [{ translateX }] }}>
          <Button />
        </ButtonContainer>
        <ToggleButton onPress={leftClick}>
          <ButtonText>Plan</ButtonText>
        </ToggleButton>
        <ToggleButton onPress={rightClick}>
          <ButtonText>Reality</ButtonText>
        </ToggleButton>
      </ButtonBox>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
`;

const ButtonBox = styled.View`
  margin-top: 15px;
  position: relative;
  width: 80%;
  height: 40px;
  background-color: #3a0b7e;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled(Animated.View)`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 50%;
  height: 36px;
  background-color: #5c16c4;
  border-radius: 13px;
`;

const Button = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const ToggleButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #ddd;
  font-size: 16px;
  font-weight: 500;
`;

export default TextSwitcher;
