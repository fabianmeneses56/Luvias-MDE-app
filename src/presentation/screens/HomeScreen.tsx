import React from 'react';

// import ForecastView from '../components/ForecastView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{paddingTop: top}}>
      {/* <ForecastView /> */}

      <Text>algo aca</Text>
    </View>
  );
};

export default HomeScreen;
