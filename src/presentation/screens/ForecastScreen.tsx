/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {Button, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import ForecastView from '../components/ForecastView';
import {getForecastByLocation} from '../../actions/api/getForecast';
import {appColor, arrayLocations} from '../../config/utils/constanst';
import LoadingScreen from './loading/LoadingScreen';
import {storage} from '../../config/storage/mmkvStorage';

export const ForecastScreen = () => {
  const {top} = useSafeAreaInsets();

  const onBoardingViewed = storage.getString('location');

  const [currentLocation, setCurrentLocation] = useState(0);
  const {isLoading, data} = useQuery({
    queryKey: ['forecast', arrayLocations[currentLocation].path],
    queryFn: () => getForecastByLocation(arrayLocations[currentLocation].path),
    placeholderData: previousData => previousData,
  });
  const lastUpdate = data?.date.split(' ').reverse().join(' ');

  useEffect(() => {
    const indexFavoriteLocation = arrayLocations.findIndex(
      value => value.name === onBoardingViewed,
    );
    setCurrentLocation(indexFavoriteLocation ?? 0);
  }, [onBoardingViewed]);

  return (
    <View style={[styles.container, {paddingTop: top + 20}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          style={{height: 40, borderColor: appColor, width: 110}}
          textColor={appColor}
          mode="outlined"
          onPress={() =>
            setCurrentLocation(prev => {
              if (prev > 0) {
                return prev - 1;
              }
              return arrayLocations.length - 1;
            })
          }
          compact
          icon="chevron-left-circle">
          Atrás
        </Button>
        <View
          style={{
            alignSelf: 'center',
            flex: 1,
            padding: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '600',
            }}
            variant="headlineSmall">
            {arrayLocations[currentLocation].name}
          </Text>
          <Text
            style={{
              textAlign: 'center',
            }}
            variant="labelLarge">
            {lastUpdate}
          </Text>
        </View>
        <Button
          style={{height: 40, borderColor: appColor, width: 110}}
          icon={'chevron-right-circle'}
          contentStyle={{flexDirection: 'row-reverse'}}
          mode="outlined"
          textColor={appColor}
          compact
          onPress={() =>
            setCurrentLocation(prev => {
              if (prev !== arrayLocations.length - 1) {
                return prev + 1;
              }

              return 0;
            })
          }>
          Siguiente
        </Button>
      </View>

      {isLoading && <LoadingScreen />}
      {data && <ForecastView forecastScreenMode data={data} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
});
