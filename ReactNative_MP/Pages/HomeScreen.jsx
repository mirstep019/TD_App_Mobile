import React from 'react';
import { View, Text } from 'react-native';
import CustomTopBar from '../components/CustomTopBar'
const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomTopBar title="Home" />
      <Text>Welcome to the Training Diary app!</Text>
    </View>
  );
};

export default HomeScreen;
