import React from 'react';
import { View, Text } from 'react-native';
import CustomTopBar2 from '../components/CustomTopBar2'

const StatsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomTopBar2 title="Stats" />
      <Text>Here will be stats displayed!</Text>
    </View>
  );
};

export default StatsScreen;
