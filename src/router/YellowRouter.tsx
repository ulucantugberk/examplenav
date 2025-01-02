import React, {JSX} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BlackScreen, PurpleScreen, YellowScreen} from '../screens';

const TopTab = createMaterialTopTabNavigator();

export function YellowRouter(): JSX.Element {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="YellowScreen" component={YellowScreen} />
      <TopTab.Screen name="PurpleScreen" component={PurpleScreen} />
      <TopTab.Screen name="BlackScreen" component={BlackScreen} />
    </TopTab.Navigator>
  );
}
