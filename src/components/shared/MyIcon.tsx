import React, {FC} from 'react';
import {View} from 'react-native';
import {color} from '../../constants';

export const MyIcon: FC<{iconColor?: string; middle?: boolean}> = ({
  iconColor = color.COLOR_WHITE,
  middle = false,
}) => {
  return middle ? (
    <View
      style={{
        backgroundColor: iconColor,
        borderRadius: 100,
        borderWidth: 1,
        height: 60,
        width: 60,
      }}
    />
  ) : (
    <View
      style={{
        backgroundColor: iconColor,
        height: 30,
        width: 30,
      }}
    />
  );
};
