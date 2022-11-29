import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AnimalNavigator from './help';
import TabNavigator from './taps';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default AppNavigator;