import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomTopBar from '../components/CustomTopBar';
import styled from 'styled-components/native';
import { Divider } from '@rneui/themed';

const HomeScreen = () => {
  return (
    <Container>
      <CustomTopBar title="Training Diary" />
      <ScrollContainer>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <Content>
            <Header>
              <HeaderText>15 March 2023</HeaderText>
            </Header>
            <ExerciseList>
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 1</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 2</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 3</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 4</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 5</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 6</ExerciseName></ExerciseListItem>
            </ExerciseList>
          </Content>
          <Content>
            <Header>
              <HeaderText>15 March 2023</HeaderText>
            </Header>
            <ExerciseList>
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 1</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 2</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 3</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 4</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 5</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 6</ExerciseName></ExerciseListItem>
            </ExerciseList>
          </Content>
          <Content>
            <Header>
              <HeaderText>15 March 2023</HeaderText>
            </Header>
            <ExerciseList>
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 1</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 2</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 3</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 4</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 5</ExerciseName></ExerciseListItem>
              <Divider />
              <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 6</ExerciseName></ExerciseListItem>
            </ExerciseList>
          </Content>
        </ScrollView>
      </ScrollContainer>
    </Container>
  );
};

const Container = styled.View`
  padding-top: 120px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ScrollContainer = styled.View`
  display: flex;
  width: 85%;
`;

const Content = styled.View`
  width: 100%;
  margin-top: 50px;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #5c16c4;
`;

const Header = styled.View`
  background-color: #5c16c4;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin: 15px;
  color: #fff;
`;

const ExerciseList = styled(ScrollView)`
  padding: 10px;
  overflow-x: hidden;
`;

const ExerciseListItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
  font-size: 16px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 20px;
`;

const Icon = styled(Ionicons)`
  color: #5c16c4;
`;

const ExerciseName = styled.Text`
  color: #000;
  font-size: 16px;
  margin-left: 10px;
`;

export default HomeScreen;
