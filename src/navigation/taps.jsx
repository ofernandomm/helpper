import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimalNavigator from './help';
import { AntDesign } from '@expo/vector-icons'
import { useSelector } from 'react-redux';

import { Home, User, Cart } from '../screens';

const Tab= createBottomTabNavigator();

const TabNavigator = () => {

  const cart =useSelector((state)=>state.cart.items)

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
          headerShown:false,
          tabBarIcon:({color,size})=>(
            <AntDesign name="user" size={24} color="purple" />
          )
          }}
        />
        <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown:false,
          tabBarIcon:({color,size})=>(
            <AntDesign name="user" size={24} color="purple" />
          ),
          tabBarBadge:cart.length,
          }}
        />
    </Tab.Navigator>
  );
};

export default TabNavigator;