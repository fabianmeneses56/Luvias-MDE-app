/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {Button, Text} from 'react-native-paper';

import ForecastView from '../components/ForecastView';
import {getForecastByLocation} from '../../actions/api/getForecast';
import {arrayLocations} from '../../config/utils/constanst';

export const ForecastScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const {isLoading, data} = useQuery({
    queryKey: ['forecast', arrayLocations[currentLocation].path],
    queryFn: () => getForecastByLocation(arrayLocations[currentLocation].path),
    placeholderData: previousData => previousData,
  });
  console.log(data);
  console.log(currentLocation);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <Button
          mode="contained"
          onPress={() =>
            setCurrentLocation(prev => {
              if (prev > 0) {
                return prev - 1;
              }
              return 0;
            })
          }>
          Back
        </Button>
        <Button
          mode="contained"
          onPress={() =>
            setCurrentLocation(prev => {
              if (prev !== arrayLocations.length - 1) {
                return prev + 1;
              }

              return 0;
            })
          }>
          Next
        </Button>
      </View>
      <Text style={{alignSelf: 'center'}} variant="headlineLarge">
        {arrayLocations[currentLocation].name}
      </Text>
      {isLoading ? (
        <Text>isLoading...</Text>
      ) : (
        <ForecastView forecastScreenMode data={data} />
      )}
    </>
  );
};
