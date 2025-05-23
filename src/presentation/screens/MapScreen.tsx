/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Overlay} from 'react-native-maps';
import {useQuery} from '@tanstack/react-query';

import {useLocationStore} from '../../store/location/useLocationStore';
import LoadingScreen from './loading/LoadingScreen';
import {getRadar} from '../../actions/api/getRadar';

const MapScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();
  const [showUserLocation, setShowUserLocation] = useState(false);

  const {isLoading, data} = useQuery({
    queryKey: ['radar'],
    queryFn: () => getRadar(),
    initialData: {
      north: 0,
      south: 0,
      east: 0,
      west: 0,
      url: 'https://siata.gov.co/data/siata_app/ultima_imagen_radarDBZH.png',
    },
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
    gcTime: 0,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  if (lastKnownLocation === null) {
    return <LoadingScreen />;
  }

  const onMapReady = () => {
    setShowUserLocation(true);
  };
  if (isLoading) {
    <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <MapView
        onMapReady={onMapReady}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        showsUserLocation={showUserLocation}
        region={{
          latitude: 6.244203,
          longitude: -75.581212,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}>
        <Overlay
          image={{
            uri: data.url,
          }}
          bounds={[
            [data.north, data.east],
            [data.south, data.west],
          ]}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
