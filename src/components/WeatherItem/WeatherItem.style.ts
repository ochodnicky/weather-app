import {StyleSheet} from 'react-native';

import {MD2Colors} from 'react-native-paper';

export const WeatherItemStyles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  chip: {
    backgroundColor: MD2Colors.blue100,
  },
});
