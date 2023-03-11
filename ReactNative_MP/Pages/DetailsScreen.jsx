import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { Divider } from '@rneui/themed';
import CustomTopBar2 from '../components/CustomTopBar2';
import { MaterialIcons } from '@expo/vector-icons';
import BackButton from '../components/CustomTopBar2';


const DetailsScreen = ({ navigation }) => {

    const handlePressBack = () => {
        navigation.goBack();
      };

    const handleFinish = () => {
        navigation.goBack();
      };

  return (
    <Container>
     <CustomTopBar2 title="Training Details" title2="Training UB Hypertrophy" onPressBack={handlePressBack} />
      <ScrollContainer>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <Content>
              <ExerciseList>
                <TrainingName>Exercise 1</TrainingName>
                <Divider />
                <ExerciseListItem>
                    <ExerciseName>Instructions</ExerciseName>
                    <ExerciseIns>To do this exercise Youd need to lay down on ground and squeeze your legs upon the ground</ExerciseIns>
                </ExerciseListItem>
                <Divider />
                <ExerciseListItem><ExerciseName></ExerciseName></ExerciseListItem>
                <Divider />
              </ExerciseList>
          </Content>
          <Content>
              <ExerciseList>
                <TrainingName>Exercise 2</TrainingName>
                <Divider />
                <ExerciseListItem>
                    <ExerciseName>Instructions</ExerciseName>
                    <ExerciseIns>To do this exercise Youd need to lay down on ground and squeeze your legs upon the ground</ExerciseIns>
                </ExerciseListItem>
                <Divider />
                <ExerciseListItem><ExerciseName></ExerciseName></ExerciseListItem>
                <Divider />
              </ExerciseList>
          </Content>
          <Content>
              <ExerciseList>
                <TrainingName>Exercise 3</TrainingName>
                <Divider />
                <ExerciseListItem>
                    <ExerciseName>Instructions</ExerciseName>
                    <ExerciseIns>To do this exercise Youd need to lay down on ground and squeeze your legs upon the ground</ExerciseIns>
                </ExerciseListItem>
                <Divider />
                <ExerciseListItem><ExerciseName></ExerciseName></ExerciseListItem>
                <Divider />
              </ExerciseList>
          </Content>
          <Button onPress={handleFinish}>
            <ButtonText>Finish Training</ButtonText>
          </Button>
        </ScrollView>
      </ScrollContainer>
    </Container>
  );
};

export const Button = styled.TouchableOpacity`
  background-color: #5c16c4; 
  padding: 10px; 
  border-radius: 100px; 
  width: 100%; 
  height: 55px; 
  display: flex; 
  justify-content: center;
  margin-top: 30px;
  margin: 40px auto;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;


const Container = styled.View`
  padding-top: 120px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ScrollContainer = styled.View`
  display: flex;
  width: 85%;
  height: 100%;
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
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin: 15px;
  color: #fff;
`;

const ExerciseList = styled(ScrollView)`
  padding: 10px;
  overflow-x: visible;
`;

const ExerciseListItem = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-weight: 500;
`;
const ExerciseIns = styled.Text`
  color: #000;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 15px;
`;
const TrainingName = styled.Text`
  color: #5c16c4;
  font-size: 17px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
`;
export default DetailsScreen;
