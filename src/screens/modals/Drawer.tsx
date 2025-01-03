import React, {FC, useRef} from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment-timezone';
import {useSharedStyles} from '../../constants';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';

export const DrawerModal: FC = () => {
  const navigation: any = useNavigation();
  const styles = useSharedStyles();
  const lastPress = useRef<number>(0);

  const DrawerHeader = () => {
    return (
      <View
        style={{
          alignItems: 'center',
          borderBottomWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingVertical: 30,
        }}>
        <Button onPress={() => {}} style={{borderRadius: 0}}>
          Sign Up
        </Button>
        <Button onPress={() => {}} style={{borderRadius: 0}}>
          Sign In
        </Button>
      </View>
    );
  };
  const DrawerBody = () => {
    return <View style={{...styles.safeArea}}></View>;
  };
  const DrawerFooter = () => {
    return (
      <View style={{alignItems: 'center', borderTopWidth: 1}}>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={async () => {
              const now = new Date().getTime();
              if (now - lastPress.current > 100)
                await Linking.openURL('http://localhost:8081');
              lastPress.current = now;
            }}>
            <Image
              source={require('../../assets/img/social/instagram.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={async () => {
              const now = new Date().getTime();
              if (now - lastPress.current > 100)
                await Linking.openURL('http://localhost:8081');
              lastPress.current = now;
            }}
            style={{marginLeft: 30}}>
            <Image
              source={require('../../assets/img/social/facebook.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={async () => {
              const now = new Date().getTime();
              if (now - lastPress.current > 100)
                await Linking.openURL('http://localhost:8081');
              lastPress.current = now;
            }}
            style={{marginLeft: 30}}>
            <Image
              source={require('../../assets/img/social/x.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={async () => {
              const now = new Date().getTime();
              if (now - lastPress.current > 100)
                await Linking.openURL('http://localhost:8081');
              lastPress.current = now;
            }}
            style={{marginLeft: 30}}>
            <Image
              source={require('../../assets/img/social/youtube.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingBottom: 30}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={async () => {
              const now = new Date().getTime();
              if (now - lastPress.current > 100)
                await Linking.openURL('http://localhost:8081');
              lastPress.current = now;
            }}
            style={{marginBottom: 5}}>
            <Text style={{textAlign: 'center'}}>examplenav.com</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center'}}>
            All Rights Reserved © {moment().format('YYYY')}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <DrawerHeader />
      <DrawerBody />
      <DrawerFooter />
    </View>
  );
};
