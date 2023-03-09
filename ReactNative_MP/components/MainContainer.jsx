import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Screens
import HomeScreen from '../Pages/HomeScreen';
import StatsScreen from '../Pages/StatsScreen';
import ProfileScreen from '../Pages/ProfileScreen';

//Login Screen
const loginName = 'Login';

//Screen names
const homeName = 'Home';
const statsName = 'Stats';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

function MainContainer(){

    return(
        <NavigationContainer>
            <Tab.Navigator
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

            return <Ionicons name={iconName} size={size} color={color} />;
          },

        })}>
            
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={statsName} component={StatsScreen} />
            <Tab.Screen name={profileName} component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
    )
}

export default MainContainer;
