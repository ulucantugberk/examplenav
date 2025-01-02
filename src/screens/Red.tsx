import React, {FC} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';
import {color, useSharedStyles} from '../constants';

export const RedScreen: FC = () => {
  const styles = useSharedStyles();
  const navigation: any = useNavigation();
  return (
    <View style={{...styles.safeArea, backgroundColor: color.COLOR_RED}}>
      <Button
        onPress={() => navigation.navigate('PinkScreen')}
        style={{marginVertical: 15}}>
        Go to Pink...
      </Button>
    </View>
  );
};
