import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {color} from '../index';

export const useSharedStyles = () => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    headerContainer: {
      backgroundColor: color.COLOR_WHITE,
      borderWidth: 1,
      paddingVertical: 10,
      width: 300,
    },
    safeArea: {
      flex: 1,
      paddingBottom: insets.bottom,
      paddingTop: insets.top,
    },
    textCenter: {textAlign: 'center'},
  });
};
