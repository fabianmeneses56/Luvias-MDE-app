import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider, MD3LightTheme} from 'react-native-paper';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {BottomTabNavigation} from './presentation/navigation/BottomTabNavigation';
import {PermissionsChecker} from './presentation/providers/PermissionsChecker';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {storage} from './config/storage/mmkvStorage';

const queryClient = new QueryClient();

const SiataApp = () => {
  const onBoardingViewed = storage.getString('location');

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <PermissionsChecker>
          <PaperProvider theme={MD3LightTheme}>
            {onBoardingViewed ? <BottomTabNavigation /> : <StackNavigator />}
          </PaperProvider>
        </PermissionsChecker>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default SiataApp;
