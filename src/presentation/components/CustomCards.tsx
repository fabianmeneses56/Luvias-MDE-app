/* eslint-disable react-native/no-inline-styles */
import {StyleSheet} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';

interface Props {
  withCard: number;
  heightCard: number;
  degrees?: string;
}

const CustomCards = ({withCard, heightCard, degrees = '21'}: Props) => {
  return (
    <Card
      style={[styles.container, {width: withCard, height: heightCard}]}
      mode="elevated">
      <Card.Content
        style={{
          alignItems: 'center',
          height: '100%',
          justifyContent: 'space-between',
        }}>
        <Text>{degrees}°</Text>
        <Text>Icono</Text>
        <Text>Tarde</Text>
      </Card.Content>
    </Card>
  );
};

export default CustomCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F8F9',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
