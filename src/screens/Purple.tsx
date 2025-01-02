import React, {FC} from 'react';
import {View} from 'react-native';
import {color, useSharedStyles} from '../constants';

export const PurpleScreen: FC = () => {
  const styles = useSharedStyles();
  return <View style={{...styles.safeArea, backgroundColor: color.COLOR_PURPLE}} />;
};
