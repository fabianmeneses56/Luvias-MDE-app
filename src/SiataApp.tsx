import '../gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigation} from './presentation/navigation/BottomTabNavigation';

const SiataApp = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer>
  );
};

export default SiataApp;
