import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Map screen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
