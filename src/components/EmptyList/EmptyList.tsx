import React from 'react';
import {View} from 'react-native';

import {Icon, Text} from 'react-native-paper';

import {EmptyListStyles} from '@/components/EmptyList/EmptyList.style.ts';

export const EmptyList = () => {
  return (
    <View style={EmptyListStyles.container} testID="empty-list">
      <Icon size={48} source="weather-cloudy-alert" />
      <Text>No items found</Text>
    </View>
  );
};
