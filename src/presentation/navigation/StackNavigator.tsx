import {createStackNavigator} from '@react-navigation/stack';

import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import {BottomTabNavigation} from './BottomTabNavigation';
import {RootStackParams} from '../../infrastructure/interfaces/navigation';

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="onboardingScreen" component={OnboardingScreen} />
      <Stack.Screen
        name="bottomTabNavigation"
        component={BottomTabNavigation}
      />
    </Stack.Navigator>
  );
};
