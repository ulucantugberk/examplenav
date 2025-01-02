import React, {JSX} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '../screens';
import {BottomRouter} from './index';

const Stack = createNativeStackNavigator();

export function MainRouter(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="BottomRouter" screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomRouter" component={BottomRouter} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}
