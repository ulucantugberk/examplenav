import React, {JSX} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {BlueScreen, CyanScreen, GreenScreen} from '../screens';
import {DrawerRouter, YellowRouter} from './index';
import {MyIcon} from '../components';
import {color} from '../constants';

const BottomTab = createBottomTabNavigator();

export function BottomRouter(): JSX.Element {
  const navigation: any = useNavigation();
  return (
    <BottomTab.Navigator
      screenOptions={({route}: any) => {
        return {
          headerShown: route.name !== 'DrawerRouter',
          headerTitleAlign: 'center',
          lazy: true,
          tabBarShowLabel: false,
        };
      }}>
      <BottomTab.Screen
        name="DrawerRouter"
        component={DrawerRouter}
        options={{
          tabBarIcon: () => <MyIcon iconColor={color.COLOR_RED} />,
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BottomRouter',
                  params: {
                    screen: 'DrawerRouter',
                    params: {
                      screen: 'RedRouter',
                      params: {
                        screen: 'RedScreen',
                      },
                    },
                  },
                },
              ],
            });
          },
        }}
      />
      <BottomTab.Screen
        name="BlueScreen"
        component={BlueScreen}
        options={{
          tabBarIcon: () => <MyIcon iconColor={color.COLOR_BLUE} />,
          tabBarBadge: '',
          tabBarBadgeStyle: {left: 20},
        }}
      />
      <BottomTab.Screen
        name="CyanScreen"
        component={CyanScreen}
        options={{
          tabBarIcon: () => <MyIcon iconColor={color.COLOR_CYAN} middle />,
          tabBarItemStyle: {top: -15},
        }}
      />
      <BottomTab.Screen
        name="GreenScreen"
        component={GreenScreen}
        options={{
          tabBarIcon: () => <MyIcon iconColor={color.COLOR_GREEN} />,
        }}
      />
      <BottomTab.Screen
        name="YellowRouter"
        component={YellowRouter}
        options={{
          tabBarIcon: () => <MyIcon iconColor={color.COLOR_YELLOW} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
