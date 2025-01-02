import React, {JSX} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MyHeader} from '../components';
import {RedRouter} from './index';

const Drawer = createDrawerNavigator();

export function DrawerRouter(): JSX.Element {
  return (
    <Drawer.Navigator
      screenOptions={({navigation}: any) => {
        const headerShown = navigation.getState().routes
          ? navigation.getState().routes?.[navigation.getState().index].state?.routes?.[1]?.name === undefined
          : true;
        return {
          headerShown: headerShown,
          headerTitle: () => <MyHeader navigation={navigation} />,
          headerTitleAlign: 'center',
          lazy: true,
        };
      }}>
      <Drawer.Screen name="RedRouter" component={RedRouter} />
    </Drawer.Navigator>
  );
}
