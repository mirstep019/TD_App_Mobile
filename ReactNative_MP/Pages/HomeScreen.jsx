import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomTopBar from '../components/CustomTopBar';
import styled from 'styled-components/native';
import { Divider } from '@rneui/themed';
import ExpandButton from '../components/ExpandButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {

  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const [completed, setCompleted] = useState(null);

  const navigation = useNavigation();

  const toggleExpansion1 = () => {setExpanded1(!expanded1);};
  const toggleExpansion2 = () => {setExpanded2(!expanded2);};
  const toggleExpansion3 = () => {setExpanded3(!expanded3);};


  return (
    <Container>
      <CustomTopBar title="Training Diary" />
      <ScrollContainer>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <Content>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <Header expanded={expanded1} >
                <HeaderText>13 March 2023</HeaderText>
                <TouchableOpacity onPress={() => setCompleted(!completed)}>
                  <Ionicons name={completed ? 'checkmark-circle' : 'close-circle-outline'} size={32} color={completed ? 'green' : 'red'} />
                </TouchableOpacity>
                <ExpandButton onPress={toggleExpansion1}>
                  <Ionicons name={expanded1 ? 'chevron-up' : 'chevron-down'} size={32} color="#fff" />
                </ExpandButton>
              </Header>
            </TouchableOpacity>
            {expanded1 && (
              <ExerciseList>
                <ExerciseListItem><TrainingName>Training UB Hypetrophy</TrainingName></ExerciseListItem>
                <Divider />
                <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 1</ExerciseName></ExerciseListItem>
                <Divider />
                <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 2</ExerciseName></ExerciseListItem>
                <Divider />
                <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 3</ExerciseName></ExerciseListItem>
                <Divider />
                <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 4</ExerciseName></ExerciseListItem>
                <Divider />
                <ExerciseListItem><Icon name="ellipse" size={16} /><ExerciseName>Exercise 5</ExerciseName></ExerciseListItem>
              </ExerciseList>
            )}
          </Content>
          <Content>
            <Header expanded={expanded2}>
              <HeaderText>14 March 2023</HeaderText>
              <TouchableOpacity onPress={() => setCompleted(!completed)}>
                <Ionicons name={completed ? 'checkmark-circle' : 'close-circle-outline'} size={32} color={completed ? 'green' : 'red'} />
              </TouchableOpacity>
              <ExpandButton onPress={toggleExpansion2}>
                <Ionicons name={expanded2 ? 'chevron-up' : 'chevron-down'} size={32} color="#fff" />
              </ExpandButton>
            </Header>
            {expanded2 && (
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
            )}
          </Content>
          <Content>
            <Header expanded={expanded3}>
              <HeaderText>15 March 2023</HeaderText>
              <TouchableOpacity onPress={() => setCompleted(!completed)}>
                <Ionicons name={completed ? 'checkmark-circle' : 'close-circle-outline'} size={32} color={completed ? 'green' : 'red'} />
              </TouchableOpacity>
              <ExpandButton onPress={toggleExpansion3}>
                <Ionicons name={expanded3 ? 'chevron-up' : 'chevron-down'} size={32} color="#fff" />
              </ExpandButton>
            </Header>
            {expanded3 && (
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
            )}
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

  ${(props) =>
    !props.expanded &&
    `
      border-radius: 17px;
  `}

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
const TrainingName = styled.Text`
  color: #000;
  font-size: 17px;
  font-weight: 500;
`;
export default HomeScreen;
