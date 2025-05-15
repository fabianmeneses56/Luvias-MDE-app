import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Overlay} from 'react-native-maps';
// import {Text} from 'react-native-paper';

const MapScreen = () => {
  // const mapRef = useRef<MapView>();
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
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
            [5.1, -76.6],
            [7.3, -74.3],
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
