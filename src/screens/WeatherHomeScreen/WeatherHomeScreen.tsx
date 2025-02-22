import React from 'react';
import {View} from 'react-native';

import {WeatherList} from '@/components/WeatherList/WeatherList';
import {WeatherHomeScreenStyles} from '@/screens/WeatherHomeScreen/WeatherHomeScreen.style';

export const WeatherHomeScreen = () => {
  return (
    <View style={WeatherHomeScreenStyles.container}>
      <WeatherList />
    </View>
  );
};
