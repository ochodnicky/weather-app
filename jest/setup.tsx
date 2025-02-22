import React from 'react';

import {jest} from '@jest/globals';
import * as actualNavTypes from '@react-navigation/native'; // Import the module type

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import '@shopify/flash-list/jestSetup';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

jest.mock('@react-navigation/native', () => {
  const weatherItemData = require('./mocks/data').PARSED_WEATHER_DATA;
  const screenName = require('../src/navigation/Navigation.enums').ScreenName
    .WeatherDetails;
  const actualNav: typeof actualNavTypes = jest.requireActual(
    '@react-navigation/native',
  );
  return {
    ...actualNav,
    useNavigation: () => ({navigate: jest.fn()}),
    useRoute: () => ({
      key: 'WeatherDetails-1',
      name: screenName,
      params: {
        weatherItem: weatherItemData,
      },
    }),
    NavigationContainer: ({children}: {children: React.ReactNode}) => (
      <>{children}</>
    ),
  };
});

jest.mock('@react-navigation/native-stack', () => ({
  createNativeStackNavigator: () => ({
    Navigator: 'MockNavigator',
    Screen: 'MockScreen',
  }),
}));

jest.mock('react-native-config', () => ({
  OPEN_WEATHER_API_BASE_URL: 'https://api.openweathermap.org',
  OPEN_WEATHER_API_ICON_URL: 'https://openweathermap.org/img/w',
  OPEN_WEATHER_API_KEY: 'ac7e32808d6eef1837f92eca950e4ed3',
}));
