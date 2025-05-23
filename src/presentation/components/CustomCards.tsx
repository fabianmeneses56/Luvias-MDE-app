import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';

interface Props {
  dayMoment?: string;
  data?: 'BAJA' | 'MEDIA' | 'ALTA';
}

export const iconMapDay: Record<
  'BAJA' | 'MEDIA' | 'ALTA',
  ImageSourcePropType
> = {
  BAJA: require('../../assets/icons/daySun.png'),
  MEDIA: require('../../assets/icons/dayRain.png'),
  ALTA: require('../../assets/icons/dayStorm.png'),
};
export const iconMapNight: Record<
  'BAJA' | 'MEDIA' | 'ALTA',
  ImageSourcePropType
> = {
  BAJA: require('../../assets/icons/nightMoon.png'),
  MEDIA: require('../../assets/icons/nightRain.png'),
  ALTA: require('../../assets/icons/nightStorm.png'),
};
const CustomCards = ({dayMoment = 'tarde', data = 'BAJA'}: Props) => {
  return (
    <Card style={[styles.container]} mode="elevated">
      <Card.Content style={styles.cardContainer}>
        <Image
          source={dayMoment !== 'Noche' ? iconMapDay[data] : iconMapNight[data]}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <Text variant="headlineMedium" style={styles.boldText}>
            {dayMoment}
          </Text>
          <Text variant="titleMedium">
            Probabilidad {data.toLocaleLowerCase()} de lluvia
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

export default CustomCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F8F9',
    borderRadius: 30,
    marginVertical: 5,
    flex: 1,
  },
  cardContainer: {
    flexDirection: 'row',
    height: '100%',
    gap: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 500,
  },
});
