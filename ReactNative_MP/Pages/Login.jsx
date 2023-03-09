import React, { useState } from 'react';
import { Container, Title, Input, Button, ButtonText } from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: handle login logic here
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
