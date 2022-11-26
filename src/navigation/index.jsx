import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AnimalNavigator from './help';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AnimalNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;