import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  withCard: number;
  heightCard: number;
  degrees?: string;
}

const CustomCards = ({withCard, heightCard, degrees = '21'}: Props) => {
  return (
    <View style={[styles.container, {width: withCard, height: heightCard}]}>
      <Text>{degrees}°</Text>
      <Text>Icono</Text>
      <Text>Tarde</Text>
    </View>
  );
};

export default CustomCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F8F9',

    borderRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
