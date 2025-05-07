import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Home screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
