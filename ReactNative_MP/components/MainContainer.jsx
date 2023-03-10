import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Pages/HomeScreen';
import StatsScreen from '../Pages/StatsScreen';
import ProfileScreen from '../Pages/ProfileScreen';
import LoginScreen from '../Pages/LoginScreen';

const homeName = 'Home';
const statsName = 'Stats';
const profileName = 'Profile';
const loginName = 'Login';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <NavigationContainer>
      {loggedIn ? (
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'barbell' : 'barbell-outline';
              } else if (rn === statsName) {
                iconName = focused ? 'cellular' : 'cellular-outline';
              } else if (rn === profileName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // Set the icon color to #5c16c4
              return <Ionicons name={iconName} size={size} color='#5c16c4' />;
            },
          })}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={statsName} component={StatsScreen} />
          <Tab.Screen name={profileName} options={{ title: 'Profile' }}>
            {(props) => <ProfileScreen {...props} onLogout={handleLogout} />}
          </Tab.Screen>
        </Tab.Navigator>
      ) : (
        <LoginScreen name={loginName} onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
