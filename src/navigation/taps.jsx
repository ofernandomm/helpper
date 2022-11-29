import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimalNavigator from './help';
import { AntDesign } from '@expo/vector-icons'

import { Home, User } from '../screens';

const Tab= createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      tabBarActiveTintColor:'purple'
    }}
    >
        <Tab.Screen
        name="Home"
        component={AnimalNavigator}
        options={{headerShown:false,
        tabBarIcon:({color,size})=>(
          <AntDesign name="home" size={24} color="purple" />
        )
        }} />
        <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon:({color,size})=>(
            <AntDesign name="user" size={24} color="purple" />
          )
          }} 
        />
    </Tab.Navigator>
  );
};

export default TabNavigator;