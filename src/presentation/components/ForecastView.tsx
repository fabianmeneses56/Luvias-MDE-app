/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native-paper';

import CustomCards from './CustomCards';
import {ForecastApi} from '../../domain/entities/forecast';
import {getCurrentDayUtil} from '../../config/utils/formats';
import {
  ProbabilityWeather,
  dayMomentOptionsArray,
  PropsForecastView,
} from '../../infrastructure/interfaces/components';
import {dayMoment} from '../../config/utils/constanst';

const ForecastView = ({data}: PropsForecastView) => {
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
      <View style={{marginVertical: 5}}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text variant="displayLarge">
            {detaisData?.data?.maxTemperature}°
            <Text variant="displaySmall">
              / {detaisData?.data?.minTemperature}°
            </Text>
          </Text>

          <Text variant="titleLarge">{detaisData.day}</Text>
        </View>
      </View>

      <View style={styles.forecastContainer}>
        {dayMomentOptionsArray.map((res, index) => (
          <CustomCards
            key={index}
            dayMoment={dayMoment[res]}
            data={detaisData?.data?.[res] as ProbabilityWeather}
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
