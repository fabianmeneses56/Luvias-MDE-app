/* eslint-disable react-hooks/exhaustive-deps */
import {PropsWithChildren, useEffect} from 'react';
import {AppState} from 'react-native';

import {usePermissionStore} from '../../store/permissions/usePermissionStore';

export const PermissionsChecker = ({children}: PropsWithChildren) => {
  const {locationStatus, checkLocationPermission, requestLocationPermission} =
    usePermissionStore();

  useEffect(() => {
    if (locationStatus !== 'undetermined') {
      requestLocationPermission();
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
};
