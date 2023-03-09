import React, { useState } from 'react';
import styled from 'styled-components/native';
import HomeScreen from './HomeScreen';
import { homeName } from '../components/MainContainer';
import { useNavigation } from '@react-navigation/native';

function LoginScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    props.onLogin()
    navigation.navigate('Home');
  };

  return (
    <Container>
      <Title>Training Diary</Title>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Login</ButtonText>
      </Button>
    </Container>
  );
};

export default LoginScreen;


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 7%;
  border-width: 2px;
  border-color: #5c16c4;
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 15px;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #5c16c4;
  padding: 10px;
  border-radius: 15px;
  width: 80%;
  height: 7%;
  display: flex;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;

`;

//#8c43ff