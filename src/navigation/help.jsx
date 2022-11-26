import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Categories, Animal, Animals } from '../screens';

const Stack = createNativeStackNavigator();

const AnimalNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Animals" component={Animals} />
      <Stack.Screen name="Animal" component={Animal} />
    </Stack.Navigator>
  );
};

export default AnimalNavigator;