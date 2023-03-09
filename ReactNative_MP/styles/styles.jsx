import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #8c43ff;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
