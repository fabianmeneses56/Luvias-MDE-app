/* eslint-disable react-native/no-inline-styles */
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';

interface Props {
  withCard: number;
  heightCard: number;
  dayMoment?: string;
  data?: 'BAJA' | 'MEDIA' | 'ALTA';
}

export const iconMap: Record<'BAJA' | 'MEDIA' | 'ALTA', ImageSourcePropType> = {
  BAJA: require('../../assets/icons/daySun.png'),
  MEDIA: require('../../assets/icons/dayRain.png'),
  ALTA: require('../../assets/icons/dayStorm.png'),
};
const CustomCards = ({
  withCard,
  heightCard,
  dayMoment = 'tarde',
  data = 'BAJA',
}: Props) => {
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
        <Text style={{textAlign: 'center'}}>{dayMoment}</Text>
        <Image source={iconMap[data]} style={{width: 50, height: 50}} />
        <Text>{data}</Text>
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
