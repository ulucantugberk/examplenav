import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';
import {color, useSharedStyles} from '../../constants';

export const MagentaModal: FC = () => {
  const navigation = useNavigation();
  const styles = useSharedStyles();
  return (
    <View style={{...styles.safeArea, backgroundColor: color.COLOR_MAGENTA}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()}>Dismiss</Button>
    </View>
  );
};
