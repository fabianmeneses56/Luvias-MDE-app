/* eslint-disable @typescript-eslint/no-unused-vars */

import 'react-native-gesture-handler/jestSetup.js';
import * as React from 'react';
import {render, screen, userEvent} from '@testing-library/react-native';
import SiataApp from '../SiataApp';

jest.mock('@react-native-vector-icons/material-design-icons', () => 'Icon');

jest.mock('react-native-maps', () => ({
  MapView: 'MapView',
  PROVIDER_GOOGLE: 'PROVIDER_GOOGLE',
  Overlay: 'Overlay',
}));

jest.mock('@react-native-community/geolocation', () => ({
  getCurrentPosition: jest.fn().mockImplementation((success, error) => {
    success({
      coords: {
        latitude: 37.7749,
        longitude: -122.4194,
      },
    });
  }),
}));

// jest.setup.js
jest.mock('react-native-permissions', () => ({
  PERMISSIONS: {
    IOS: {
      LOCATION_WHEN_IN_USE: 'location-when-in-use',
      LOCATION_ALWAYS: 'location-always',
    },
    ANDROID: {
      ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION',
      ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION',
    },
  },
  PermissionStatus: {
    GRANTED: 'granted',
    DENIED: 'denied',
    UNAVAILABLE: 'unavailable',
    BLOCKED: 'blocked',
    LIMITED: 'limited',
  },
  check: jest.fn().mockResolvedValue('granted'), // Por defecto, devolveremos 'granted'
  request: jest.fn().mockResolvedValue('granted'), // Simular respuesta exitosa
  openSettings: jest.fn(), // No hacer nada, ya que no es necesario en las pruebas
}));

test('renders correctly', () => {
  render(<SiataApp />);

  expect(screen.getByText('tarde')).toBeOnTheScreen();
});
