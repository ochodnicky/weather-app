import React, {Fragment} from 'react';

import {Divider, List, MD3Colors, Text} from 'react-native-paper';

import {
  WeatherDetailRowProps,
  WeatherDetailsRowDefaultProps,
} from '@/components/WeatherDetailRow/WeatherDetailRow.props.ts';

export const WeatherDetailRow: React.FC<WeatherDetailRowProps> = ({
  label,
  value,
  testID,
}) => {
  return (
    <Fragment>
      <List.Item
        title={label}
        rippleColor={MD3Colors.error0}
        right={({style, color}) => (
          <Text style={[style, {color}]}>{value}</Text>
        )}
        testID={testID}
      />
      <Divider />
    </Fragment>
  );
};

WeatherDetailRow.defaultProps = WeatherDetailsRowDefaultProps;
