import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {RootStackNavigator} from '@/navigation/RootNavigator/RootStackNavigator';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
