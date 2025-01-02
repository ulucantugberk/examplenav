import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {useSharedStyles} from '../../constants';

export const MyHeader: FC<{navigation?: any}> = ({navigation}) => {
  const styles = useSharedStyles();
  return (
    <Pressable
      onPress={() => navigation.navigate('SearchScreen')}
      style={styles.headerContainer}>
      <Text style={styles.textCenter}>Search...</Text>
    </Pressable>
  );
};
