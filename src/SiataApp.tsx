import '../gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigation} from './presentation/navigation/BottomTabNavigation';
import {PaperProvider} from 'react-native-paper';

const SiataApp = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <BottomTabNavigation />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default SiataApp;
