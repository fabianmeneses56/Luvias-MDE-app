/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomCards from './CustomCards';
import {Text} from 'react-native-paper';

import {Forecast} from '../../domain/entities/forecast';
import {getCurrentDayUtil} from '../../config/utils/formats';

interface Props {
  forecastScreenMode?: boolean;
  data: Forecast | undefined;
}

const ForecastView = ({forecastScreenMode, data}: Props) => {
  const localDate = getCurrentDayUtil();
  const getDataCurrentDay = data?.forecast.find(
    dataMap => dataMap.date === localDate,
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: 'center',
        }}>
        <Image
          source={require('../../assets/icons/dayStorm.png')}
          style={{width: 300, height: 300}}
        />
      </View>

      <View style={{marginVertical: 5}}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          {forecastScreenMode ? (
            <Text variant="displayLarge">
              {getDataCurrentDay?.maxTemperature}°
              <Text variant="displaySmall">
                / {getDataCurrentDay?.minTemperature}°
              </Text>
            </Text>
          ) : (
            <Text variant="displayLarge">23°</Text>
          )}
          <Text variant="titleLarge">Descripcion clima</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
          }}>
          <CustomCards withCard={120} heightCard={90} />
          <CustomCards withCard={120} heightCard={90} />
          <CustomCards withCard={120} heightCard={90} />
        </View>
      </View>

      <View>
        <Text variant="bodyLarge">Today</Text>
        <View style={styles.forecastContainer}>
          <CustomCards withCard={90} heightCard={120} />
          <CustomCards withCard={90} heightCard={120} />
          <CustomCards withCard={90} heightCard={120} />
          <CustomCards withCard={90} heightCard={120} />
        </View>
      </View>
    </View>
  );
};

export default ForecastView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },

  forecastContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
