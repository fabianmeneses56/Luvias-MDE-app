import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Image,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Overlay} from 'react-native-maps';
import {useQuery} from '@tanstack/react-query';
import {Button, Dialog, Modal, Portal, Text} from 'react-native-paper';
import {FAB} from 'react-native-paper';

import {useLocationStore} from '../../store/location/useLocationStore';
import LoadingScreen from './loading/LoadingScreen';
import {getRadar} from '../../actions/api/getRadar';
import {usePermissionStore} from '../../store/permissions/usePermissionStore';
import {downloadReflectivity} from '../../actions/fileSystem/downloadReflectivity';
import {appColor} from '../../config/utils/constanst';

const MapScreen = () => {
  const {lastKnownLocation, getLocation} = useLocationStore();
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const {locationStatus} = usePermissionStore();
  const {isPending, data, isError, error, isFetching} = useQuery({
    queryKey: ['radar'],
    queryFn: () => getRadar(),
    initialData: {
      north: 0,
      south: 0,
      east: 0,
      west: 0,
      url: 'https://geoportal.siata.gov.co/fastgeoapi/geodata/radar/3/reflectividad?0',
    },
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: 'always',
    gcTime: 0,
    refetchInterval: 5000,
  });
  const [localImage, setLocalImage] = useState<string | null>(null);
  console.log(data);
  useEffect(() => {
    setErrorDialog(isError);
  }, [isError]);

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastKnownLocation, locationStatus]);

  useEffect(() => {
    let isActive = true;

    downloadReflectivity(
      'https://siata.gov.co/data/siata_app/ultima_imagen_radarDBZH.png',
    )
      .then(path => {
        if (isActive) {
          const uri = Platform.OS === 'android' ? `file://${path}` : path;

          setLocalImage(uri);
        }
      })
      .catch(console.error);

    return () => {
      isActive = false;
    };
  }, []);

  if (lastKnownLocation === null) {
    return <LoadingScreen />;
  }
  if (!localImage) {
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
          key={localImage}
          image={{
            uri: localImage,
          }}
          bounds={[
            [data.north, data.east],
            [data.south, data.west],
          ]}
        />
      </MapView>

      <FAB
        icon="information-outline"
        style={styles.fab}
        onPress={() => setVisibleInfo(true)}
        color="white"
        size="small"
      />
      <Portal>
        <Modal
          visible={visibleInfo}
          onDismiss={() => setVisibleInfo(false)}
          contentContainerStyle={styles.modalContentContainerStyle}
          style={styles.modal}
          dismissableBackButton>
          <Image source={require('../../assets/icons/infoRadar.png')} />
        </Modal>
      </Portal>
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: appColor,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentContainerStyle: {
    width: 250,
  },
});
