import {ComponentProps} from 'react';
import Icon from '@react-native-vector-icons/material-design-icons';

export type RootStackParams = {
  onboardingScreen: undefined;
  bottomTabNavigation: undefined;
};

export type IconName = ComponentProps<typeof Icon>['name'];
