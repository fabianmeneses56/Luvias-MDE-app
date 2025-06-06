import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Overlay} from 'react-native-maps';
import {useQuery} from '@tanstack/react-query';
import {Button, Dialog, Text} from 'react-native-paper';

import {useLocationStore} from '../../store/location/useLocationStore';
import LoadingScreen from './loading/LoadingScreen';
import {getRadar} from '../../actions/api/getRadar';

const MapScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();
  const [showUserLocation, setShowUserLocation] = useState(false);

  const [errorDialog, setErrorDialog] = useState(false);

  const {isPending, data, isError, error, isFetching} = useQuery({
    queryKey: ['radar'],
    queryFn: () => getRadar(),
    initialData: {
      north: 0,
      south: 0,
      east: 0,
      west: 0,
      url: '',
    },
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
    gcTime: 0,
    refetchInterval: 5000,
  });

  useEffect(() => {
    setErrorDialog(isError);
  }, [isError]);

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastKnownLocation]);

  if (lastKnownLocation === null) {
    return <LoadingScreen />;
  }

  const onMapReady = () => {
    setShowUserLocation(true);
  };
  if (isPending) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <MapView
        onMapReady={onMapReady}
        provider={PROVIDER_GOOGLE}
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
      {isFetching && (
        <View style={styles.fetchingContainer}>
          <ActivityIndicator size={30} color="black" />
        </View>
      )}
      {error && (
        <Dialog visible={errorDialog} onDismiss={() => setErrorDialog(false)}>
          <Dialog.Title>Uy, algo salió mal 😕</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">
              No pudimos obtener la información del clima.
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setErrorDialog(false)}>Salir</Button>
          </Dialog.Actions>
        </Dialog>
      )}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fetchingContainer: {
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
  },
});
