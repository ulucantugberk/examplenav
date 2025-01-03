import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';
import {color, useSharedStyles} from '../../constants';

export const RedScreen: FC = () => {
  const navigation: any = useNavigation();
  const styles = useSharedStyles();

    useEffect(() => {
        navigation.preload('PinkScreen');
    }, []);

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
