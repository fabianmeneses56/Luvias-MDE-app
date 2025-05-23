/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomCards from './CustomCards';
import {Text} from 'react-native-paper';

import {Forecast, ForecastApi} from '../../domain/entities/forecast';
import {getCurrentDayUtil} from '../../config/utils/formats';

interface Props {
  forecastScreenMode?: boolean;
  data: Forecast;
}

const dayMoment = {
  afternoonRain: 'Tarde',
  earlyMorningRain: 'Madrugada',
  morningRain: 'Mañana',
  nightRain: 'Noche',
};
type TimeOfDayKey = keyof typeof dayMoment;
const dayMomentOptionsArray: TimeOfDayKey[] = [
  'earlyMorningRain',
  'morningRain',
  'afternoonRain',
  'nightRain',
];

const ForecastView = ({forecastScreenMode, data}: Props) => {
  const [detaisData, setDetaisData] = useState<{
    data: ForecastApi | null;
    day: string;
  }>({
    data: null,
    day: '',
  });

  useEffect(() => {
    const today = getCurrentDayUtil();
    const tomorrow = getCurrentDayUtil(true);

    const todayData = data.forecast.find(f => f.date === today);
    const tomorrowData = data.forecast.find(f => f.date === tomorrow);

    if (todayData) {
      setDetaisData({data: todayData, day: 'Hoy'});
    } else if (tomorrowData) {
      setDetaisData({data: tomorrowData, day: 'Mañana'});
    } else {
      setDetaisData({data: null, day: '—'});
    }
  }, [data]);

  return (
    <View style={{flex: 1}}>
      {!forecastScreenMode && (
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Image
            source={require('../../assets/icons/dayStorm.png')}
            style={{width: 280, height: 280}}
          />
        </View>
      )}
      <View style={{marginVertical: 5}}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          {forecastScreenMode ? (
            <Text variant="displayLarge">
              {detaisData?.data?.maxTemperature}°
              <Text variant="displaySmall">
                / {detaisData?.data?.minTemperature}°
              </Text>
            </Text>
          ) : (
            <Text variant="displayLarge">23°</Text>
          )}
          <Text variant="titleLarge">{detaisData.day}</Text>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        {dayMomentOptionsArray.map((res, index) => (
          <CustomCards
            key={index}
            dayMoment={dayMoment[res]}
            data={detaisData?.data?.[res] as 'BAJA' | 'MEDIA' | 'ALTA'}
          />
        ))}
      </View>
    </View>
  );
};

export default ForecastView;

const styles = StyleSheet.create({
  forecastContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});
