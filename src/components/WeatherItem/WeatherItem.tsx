import React from 'react';
import {View} from 'react-native';

import {Chip, List, MD2Colors} from 'react-native-paper';

import {
  WeatherItemDefaultProps,
  WeatherItemProps,
} from '@/components/WeatherItem/WeatherItem.props';
import {WeatherItemStyles} from '@/components/WeatherItem/WeatherItem.style';
import {ENVIRONMENT_VARIABLES} from '@/constants/env.const';

export const WeatherItem: React.FC<WeatherItemProps> = ({
  name,
  conditions,
  temperature,
  icon,
  onPress,
  list,
  testID,
}) => {
  return (
    <List.Item
      title={name}
      description={conditions}
      onPress={onPress}
      disabled={!list}
      left={() => (
        <List.Image
          source={{
            uri: `${ENVIRONMENT_VARIABLES.OPEN_WEATHER_API_ICON_URL}/${icon}.png`,
          }}
        />
      )}
      right={() => (
        <View style={WeatherItemStyles.right}>
          <Chip style={WeatherItemStyles.chip} selectedColor={MD2Colors.white}>
            {temperature} °F
          </Chip>
          {list && <List.Icon icon="chevron-right" color={MD2Colors.grey400} />}
        </View>
      )}
      testID={testID}
    />
  );
};

WeatherItem.defaultProps = WeatherItemDefaultProps;
