import React from 'react';
import {View} from 'react-native';

import {Button, MD2Colors, Text} from 'react-native-paper';

import {ErrorComponentProps} from '@/components/ErrorComponent/ErrorComponent.props';
import {ErrorComponentStyles} from '@/components/ErrorComponent/ErrorComponent.style';

export const ErrorComponent: React.FC<ErrorComponentProps> = ({onRetry}) => {
  return (
    <View style={ErrorComponentStyles.container} testID="error-message">
      <Text>Something went wrong!</Text>
      <Button
        icon="reload"
        mode="contained"
        onPress={onRetry}
        buttonColor={MD2Colors.blue400}>
        Try again
      </Button>
    </View>
  );
};
