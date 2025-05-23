import {
  DimensionValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';

interface Props {
  withCard: number | DimensionValue;
  heightCard: number | DimensionValue;
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
          flexDirection: 'row',
          height: '100%',
          gap: 10,
        }}>
        <Image
          source={dayMoment !== 'Noche' ? iconMapDay[data] : iconMapNight[data]}
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
        />

        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text variant="titleLarge" style={{fontWeight: 500}}>
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
    marginVertical: 3,
  },
});
