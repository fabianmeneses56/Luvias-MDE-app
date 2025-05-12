import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {Text} from 'react-native-paper';

import ForecastView from '../components/ForecastView';
import {getForecastByLocation} from '../../actions/api/getForecast';

export const ForecastScreen = () => {
  const {isLoading, data} = useQuery({
    queryKey: ['forecast', 'test'],
    queryFn: () => getForecastByLocation(),
  });

  return (
    <>
      {isLoading ? (
        <Text>isLoading...</Text>
      ) : (
        <ForecastView forecastScreenMode data={data} />
      )}
    </>
  );
};
