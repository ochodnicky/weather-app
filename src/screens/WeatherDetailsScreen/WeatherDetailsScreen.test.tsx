import React from 'react';

import {render, waitFor} from '@testing-library/react-native';
import {PARSED_WEATHER_DATA} from 'jest/mocks/data';
import {ProvidersWrapper} from 'jest/utils';

import {WeatherDetailsScreen} from '@/screens/WeatherDetailsScreen/WeatherDetailsScreen';

describe('WeatherDetailsScreen', () => {
  it('should display weather detail properties', async () => {
    const {findByTestId} = render(<WeatherDetailsScreen />, {
      wrapper: ProvidersWrapper,
    });

    const weatherItem = await findByTestId(
      `weather-detail-item-${PARSED_WEATHER_DATA.id}`,
    );

    const weatherDetailProperties = [
      `weather-detail-row-${PARSED_WEATHER_DATA.humidity}`,
      `weather-detail-row-${PARSED_WEATHER_DATA.pressure}`,
      `weather-detail-row-${PARSED_WEATHER_DATA.windSpeed}`,
      `weather-detail-row-${PARSED_WEATHER_DATA.cloudCoverage}`,
    ];

    await waitFor(async () => {
      expect(weatherItem).toBeOnTheScreen();
      for (const property of weatherDetailProperties) {
        const element = await findByTestId(property);
        expect(element).toBeOnTheScreen();
      }
    });
  });
});
