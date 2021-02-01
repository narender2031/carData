import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStack from './HomeStack';
import {navigationRoute} from '../constants/navigatiomn';

export default function RootStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={navigationRoute.HOME}>
      <Stack.Screen
        name={navigationRoute.HOME}
        component={HomeStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
