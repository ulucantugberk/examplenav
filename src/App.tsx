import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
}
