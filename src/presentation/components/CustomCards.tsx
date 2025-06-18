import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';

import {PropsCustomCards} from '../../infrastructure/interfaces/components';
import {iconMapDay, iconMapNight} from '../../config/utils/constanst';

const CustomCards = ({
  dayMoment = 'tarde',
  data = 'BAJA',
}: PropsCustomCards) => {
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
