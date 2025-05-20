/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Overlay} from 'react-native-maps';
import {useLocationStore} from '../../store/location/useLocationStore';
import LoadingScreen from './loading/LoadingScreen';

const MapScreen = () => {
  // const mapRef = useRef<MapView>();

  const {lastKnownLocation, getLocation} = useLocationStore();
  const [showUserLocation, setShowUserLocation] = useState(false);

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
  }, []);

  useEffect(() => {
    console.log(lastKnownLocation);
  }, [lastKnownLocation]);

  if (lastKnownLocation === null) {
    return <LoadingScreen />;
  }

  const onMapReady = () => {
    setShowUserLocation(true);
  };

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
            uri: 'https://siata.gov.co/data/siata_app/ultima_imagen_radarDBZH.png',
          }}
          bounds={[
            [7.3, -74.3],
            [5.1, -76.6],
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
