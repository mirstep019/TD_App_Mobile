import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo';

export default function LoginScreen({ onLogin }) {
  
  const [data, setData] = useState({
    trainerId: '',
    userName: '',
    password: '',
  })

  const [errors, setErrors] = useState({});
  const  [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
 
  const handleLogin = () => {
    console.log('data', data);
    if (!data.trainerId || !data.userName || !data.password) {
      setErrors({
        trainerId: !data.trainerId ? 'This field is required' : '',
        userName: !data.userName ? 'This field is required' : '',
        password: !data.password ? 'This field is required' : '',
      });
    } else {
      setIsLoading(true);
      axios.post('https://xn--treninkovdenkapi-ksb8z.azurewebsites.net/api/User/Login?trainerId=' + data.trainerId + '&userName=' + data.userName + '&password=' + data.password)
        .then(response => {
          setData({
            trainerId: '',
            userName: '',
            password: '',
          });
          console.log('password', data.password);
          onLogin();
          navigation.navigate('Home');
        })
        .catch(error => {
          console.log('error', error);
        })
        setIsLoading(false);
        
    }
  };
  
  return (
    <Container>
      <Background>
        <BigRectangle />
        <SmallRectangleTop />
        <SmallRectangleBottom />
        <Circle />
      </Background>
      <ComponentContainer>
        <NameOfApp>
          <Logo/>
          <Title><MainLetter>T</MainLetter>raining <MainLetter>D</MainLetter>iary</Title>
        </NameOfApp>
        {errors.trainerId && <ErrorText>{errors.trainerId}</ErrorText>}
        <Input placeholder="Trainer ID" keyboardType="numeric" value={data.trainerId} onChangeText={(value) => setData({...data, trainerId: value})}/>
        {errors.userName && <ErrorText>{errors.userName}</ErrorText>}
        <Input placeholder="Your Username" secureTextEntry={false} value={data.userName} onChangeText={(value) => setData({...data, userName: value})} />
        {errors.password && <ErrorText>{errors.password}</ErrorText>}
        <Input placeholder="Your Password" secureTextEntry value={data.password} onChangeText={(value) => setData({...data, password: value})} />
        <Button onPress={handleLogin}>
          <ButtonText>{isLoading ? 'Loading...' : 'Login'}</ButtonText>
         </Button>
      </ComponentContainer>
    </Container>
  );
};

const ErrorText = styled.Text`
  color: red;
`;

export const Container = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
`;
export const NameOfApp = styled.View`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const ComponentContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;
export const MainLetter = styled.Text`
  color: #5200FF;
`;

export const Background = styled.View`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.26);
  overflow: hidden;
`;

export const BigRectangle = styled.View`
  position: absolute;
  top: -50px;
  left: -50px;
  width: 250px;
  height: 250px;
  background-color: #5200FF;
  opacity: 0.3;
  transform: rotate(-20deg);
  border-radius: 40px;
`;

export const SmallRectangleTop = styled.View`
  position: absolute;
  top: 50px;
  right: -10px;
  width: 100px;
  height: 100px;
  background-color: rgba(124, 124, 124, 0.85);
  transform: rotate(-20deg);
  border-radius: 20px;
`;

export const SmallRectangleBottom = styled.View`
  position: absolute;
  bottom: 70px;
  left: 30px;
  width: 100px;
  height: 100px;
  background-color: rgba(124, 124, 124, 0.85);
  transform: rotate(35deg);
  border-radius: 20px;
`;

export const Circle = styled.View`
  position: absolute;
  bottom: -200px;
  right: -170px;
  width: 400px;
  height: 400px;
  background-color: #5200FF;
  opacity: 0.3;
  border-radius: 1000%;
`;

export const Title = styled.Text`
  font-size: 35px; 
  font-weight: 800; 
  margin-bottom: 30px;
  margin-bottom: 30px;
  color: rgb(124, 124, 124);
  margin-left: 5px;
`;

export const Input = styled.TextInput`
  width: 80%; 
  height: 55px; 
  border-width: 2px; 
  border-color: #5c16c4; 
  border-radius: 15px; 
  padding: 15px; 
  font-size: 18px;
  margin-bottom: 20px;
  background-color: rgb(240 235 255);
`;

export const Button = styled.TouchableOpacity`
  background-color: #5c16c4; 
  padding: 10px; 
  border-radius: 15px; 
  width: 80%; 
  height: 60px; 
  display: flex; 
  justify-content: center;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

//#8c43ff