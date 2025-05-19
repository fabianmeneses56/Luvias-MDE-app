import React, {ComponentProps} from 'react';
import Icon from '@react-native-vector-icons/material-design-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import {ForecastScreen} from '../screens/ForecastScreen';

const Tab = createBottomTabNavigator();

type IconName = ComponentProps<typeof Icon>['name'];

const tabBarIconConfig = (
  route: RouteProp<ParamListBase, string>,
  color: string,
  size: number,
) => {
  let iconName: IconName;

  if (route.name === 'Home') {
    iconName = 'home-outline';
  } else if (route.name === 'Map') {
    iconName = 'map';
  } else if (route.name === 'Forecast') {
    iconName = 'weather-lightning-rainy';
  } else {
    iconName = 'blank';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => tabBarIconConfig(route, color, size),
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Forecast" component={ForecastScreen} />
    </Tab.Navigator>
  );
};
