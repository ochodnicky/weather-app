import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import {MD2Colors} from 'react-native-paper';

import {LoadingComponentStyles} from '@/components/LoadingComponent/LoadingComponent.style';

export const LoadingComponent: React.FC = () => {
  return (
    <View style={LoadingComponentStyles.container}>
      <ActivityIndicator
        animating={true}
        size={'large'}
        color={MD2Colors.blue400}
      />
    </View>
  );
};
