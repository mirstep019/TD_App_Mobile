import React from 'react';
import { View, Text, Button } from 'react-native';
import CustomTopBar2 from '../components/CustomTopBar2'
const ProfileScreen = ({ onLogout, navigation }) => {
  
  const handleLogout = () => {
    onLogout();
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CustomTopBar2 title="Profile" />
      <Text>Profile Edit</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
