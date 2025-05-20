import '../gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigation} from './presentation/navigation/BottomTabNavigation';
import {PaperProvider} from 'react-native-paper';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PermissionsChecker} from './presentation/providers/PermissionsChecker';

const queryClient = new QueryClient();

const SiataApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PermissionsChecker>
        <NavigationContainer>
          <PaperProvider>
            <BottomTabNavigation />
          </PaperProvider>
        </NavigationContainer>
      </PermissionsChecker>
    </QueryClientProvider>
  );
};

export default SiataApp;
