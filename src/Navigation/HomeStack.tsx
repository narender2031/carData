import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import AddCarScreen from '../Screens/AddCar';
import {navigationRoute} from '../constants/navigatiomn';

export default function HomeStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={navigationRoute.HOME}>
      <Stack.Screen
        name={navigationRoute.HOME}
        component={HomeScreen}
        options={{
          title: navigationRoute.title.MY_CARS,
        }}
      />
      <Stack.Screen
        name={navigationRoute.ADD_CAR}
        component={AddCarScreen}
        options={{
          title: navigationRoute.title.ADD_CARS,
        }}
      />
    </Stack.Navigator>
  );
}
