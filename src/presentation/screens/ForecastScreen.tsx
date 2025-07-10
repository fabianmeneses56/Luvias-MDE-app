/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Text, Button} from 'react-native-paper';
import {useQuery} from '@tanstack/react-query';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import ForecastView from '../components/ForecastView';
import {getForecastByLocation} from '../../actions/api/getForecast';
import {arrayLocations} from '../../config/utils/constanst';
import LoadingScreen from './loading/LoadingScreen';
import {storage} from '../../config/storage/mmkvStorage';
import {FocusAwareStatusBar} from '../components/FocusAwareStatusBar';
import CustomBottomSheet from '../components/CustomBottomSheet';

export const ForecastScreen = () => {
  const {top} = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheet>(null);
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
    <GestureHandlerRootView>
      <View style={[styles.container, {paddingTop: top + 20}]}>
        <FocusAwareStatusBar
          barStyle="dark-content"
          backgroundColor="#ecf0f1"
        />
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Button
              mode="contained"
              onPress={() => bottomSheetRef.current?.collapse()}
              icon={'menu-down'}
              contentStyle={{flexDirection: 'row-reverse'}}
              buttonColor="#FFFFFF"
              textColor="#228997">
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '600',
                }}
                variant="headlineSmall">
                {arrayLocations[currentLocation].name}
              </Text>
            </Button>

            <Text
              style={{
                textAlign: 'center',
              }}
              variant="labelLarge">
              {lastUpdate}
            </Text>
          </View>
        </View>

        {isLoading && <LoadingScreen />}
        {data && <ForecastView data={data} />}

        <CustomBottomSheet
          bottomSheetRef={bottomSheetRef}
          onPressButton={location => {
            const indexFavoriteLocation = arrayLocations.findIndex(
              value => value.name === location,
            );
            setCurrentLocation(indexFavoriteLocation ?? 0);
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    fontWeight: '800',
  },
  contentContainer: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
});
