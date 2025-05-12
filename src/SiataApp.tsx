import '../gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigation} from './presentation/navigation/BottomTabNavigation';
import {PaperProvider} from 'react-native-paper';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const SiataApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <PaperProvider>
          <BottomTabNavigation />
        </PaperProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default SiataApp;
