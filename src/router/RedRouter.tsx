import React, {JSX} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PinkScreen, RedScreen} from '../screens';

const Stack = createNativeStackNavigator();

export function RedRouter(): JSX.Element {
  return (
    <Stack.Navigator
      initialRouteName="RedScreen"
      screenOptions={({route}: any) => {
        return {
          headerShown: route.name !== 'RedScreen',
          headerTitleAlign: 'center',
          lazy: true,
        };
      }}>
      <Stack.Screen name="RedScreen" component={RedScreen} />
      <Stack.Screen name="PinkScreen" component={PinkScreen} />
    </Stack.Navigator>
  );
}
