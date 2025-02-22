import React from 'react';
import {View} from 'react-native';

import {useRoute} from '@react-navigation/native';
import {Divider} from 'react-native-paper';

import {WeatherDetailRow} from '@/components/WeatherDetailRow/WeatherDetailRow';
import {WeatherItem} from '@/components/WeatherItem/WeatherItem';
import {ScreenName} from '@/navigation/Navigation.enums';
import {WeatherStackProps} from '@/navigation/RootNavigator/RootStackNavigator.types';
import {WeatherDetailsScreenStyles} from '@/screens/WeatherDetailsScreen/WeatherDetailsScreen.style';

export const WeatherDetailsScreen = () => {
  const route =
    useRoute<WeatherStackProps<ScreenName.WeatherDetails>['route']>();

  const weatherItem = route.params.weatherItem;

  return (
    <View style={WeatherDetailsScreenStyles.container}>
      <WeatherItem
        name={weatherItem.name}
        conditions={weatherItem.conditions}
        icon={weatherItem.conditionsIcon}
        temperature={weatherItem.temperature}
        testID={`weather-detail-item-${weatherItem.id}`}
      />
      <Divider />
      <WeatherDetailRow
        label="Humidity"
        value={`${weatherItem.humidity} %`}
        testID={`weather-detail-row-${weatherItem.humidity}`}
      />
      <WeatherDetailRow
        label="Pressure"
        value={`${weatherItem.pressure} hPA`}
        testID={`weather-detail-row-${weatherItem.pressure}`}
      />
      <WeatherDetailRow
        label="Wind Speed"
        value={`${weatherItem.windSpeed} mps`}
        testID={`weather-detail-row-${weatherItem.windSpeed}`}
      />
      <WeatherDetailRow
        label="Cloud Coverage"
        value={`${weatherItem.cloudCoverage} %`}
        testID={`weather-detail-row-${weatherItem.cloudCoverage}`}
      />
    </View>
  );
};
