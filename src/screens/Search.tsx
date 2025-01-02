import React, {FC} from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {color, useSharedStyles} from '../constants';

const searchStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footerContainer: {
    backgroundColor: color.COLOR_WHITE,
    flexDirection: 'row',
    height: 65,
  },
  headerContainer: {
    backgroundColor: color.COLOR_WHITE,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 65,
  },
  backButton: {
    borderRightWidth: 1,
    height: 65,
    width: 65,
  },
  bottomButton: {
    height: 65,
    width: Dimensions.get('window').width / 5,
  },
  titleStyle: {
    color: color.COLOR_BLACK,
    fontSize: 20,
    flex: 1,
    paddingRight: 65,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export const SearchScreen: FC = () => {
  const navigation: any = useNavigation();
  const styles = useSharedStyles();
  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.headerContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={searchStyles.backButton}
        />
        <Text style={searchStyles.titleStyle}>Search Screen</Text>
      </View>
      <View style={{...styles.safeArea, backgroundColor: color.COLOR_WHITE}} />
      <View style={searchStyles.footerContainer}>
        <Pressable
          onPress={() => {
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
          }}
          style={{
            ...searchStyles.bottomButton,
            backgroundColor: color.COLOR_RED,
          }}
        />
        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BottomRouter',
                  params: {
                    screen: 'BlueScreen',
                  },
                },
              ],
            });
          }}
          style={{
            ...searchStyles.bottomButton,
            backgroundColor: color.COLOR_BLUE,
          }}
        />
        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BottomRouter',
                  params: {
                    screen: 'CyanScreen',
                  },
                },
              ],
            });
          }}
          style={{
            ...searchStyles.bottomButton,
            backgroundColor: color.COLOR_CYAN,
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
            top: -25,
          }}
        />
        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BottomRouter',
                  params: {
                    screen: 'GreenScreen',
                  },
                },
              ],
            });
          }}
          style={{
            ...searchStyles.bottomButton,
            backgroundColor: color.COLOR_GREEN,
          }}
        />
        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'BottomRouter',
                  params: {
                    screen: 'YellowRouter',
                    params: {
                      screen: 'YellowScreen',
                    },
                  },
                },
              ],
            });
          }}
          style={{
            ...searchStyles.bottomButton,
            backgroundColor: color.COLOR_YELLOW,
          }}
        />
      </View>
    </View>
  );
};
