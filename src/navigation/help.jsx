import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Home, Animal, Animals } from '../screens';

const Stack = createNativeStackNavigator();

const AnimalNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={Home} options={{headerShown:false,}} />
      <Stack.Screen name="Animals" component={Animals}  />
      <Stack.Screen name="Animal" component={Animal} options={({route})=>({
        title: route.params.item.title

      })} />
    </Stack.Navigator>
  );
};

export default AnimalNavigator;