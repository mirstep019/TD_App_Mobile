import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from '../Pages/HomeScreen';
import StatsScreen from '../Pages/StatsScreen';
import ProfileScreen from '../Pages/ProfileScreen';
import LoginScreen from '../Pages/LoginScreen';

//Screen names
const homeName = 'Home';
const statsName = 'Stats';
const profileName = 'Profile';
const loginName = 'Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainContainer() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <NavigationContainer >
      {loggedIn ? (
        <Tab.Navigator
          color='#5c16c4'
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
              } else if (rn === statsName) {
                iconName = focused ? 'list' : 'list-outline';
              } else if (rn === profileName) {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // Set the icon color to #5c16c4
              return <Ionicons name={iconName} size={size} color='#5c16c4' />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#5c16c4',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70 },
          }}
        >
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={statsName} component={StatsScreen} />
          <Tab.Screen name={profileName} component={ProfileScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name={loginName}>
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default MainContainer;
