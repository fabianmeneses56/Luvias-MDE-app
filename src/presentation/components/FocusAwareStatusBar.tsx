import {StatusBar, StatusBarProps} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';

export const FocusAwareStatusBar: React.FC<StatusBarProps> = props => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};
