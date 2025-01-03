import React, {FC, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSharedStyles} from '../../constants';

export const LoadingScreen: FC = () => {
  const navigation: any = useNavigation();
  const styles = useSharedStyles();

  useEffect(() => {
    navigation.preload('BottomRouter');
    setTimeout(
      () => navigation.reset({
          index: 0,
          routes: [{name: 'BottomRouter'}],
      }),
      3000,
    );
  }, []);

  return (
    <View
      style={{
        ...styles.safeArea,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center'}}>Loading...</Text>
    </View>
  );
};
