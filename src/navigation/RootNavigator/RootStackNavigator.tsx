import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScreenName} from '@/navigation/Navigation.enums';
import {WeatherStackParamList} from '@/navigation/RootNavigator/RootStackNavigator.types';
import {WeatherDetailsScreen} from '@/screens/WeatherDetailsScreen/WeatherDetailsScreen';
import {WeatherHomeScreen} from '@/screens/WeatherHomeScreen/WeatherHomeScreen';

const Stack = createNativeStackNavigator<WeatherStackParamList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.WeatherHome}
        component={WeatherHomeScreen}
      />
      <Stack.Screen
        name={ScreenName.WeatherDetails}
        component={WeatherDetailsScreen}
      />
    </Stack.Navigator>
  );
};
