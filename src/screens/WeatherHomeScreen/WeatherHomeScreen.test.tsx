import React from 'react';

import {render, waitFor} from '@testing-library/react-native';
import {WEATHER_DATA_RESPONSE} from 'jest/mocks/data';
import {
  setupWeatherEmptyDataHandler,
  setupWeatherFailedHandler,
  setupWeatherSuccessHandler,
} from 'jest/mocks/handlers';
import {ProvidersWrapper} from 'jest/utils';

import {WeatherHomeScreen} from '@/screens/WeatherHomeScreen/WeatherHomeScreen';

describe('WeatherHomeScreen - success', () => {
  beforeEach(() => setupWeatherSuccessHandler());
  it('should display weather data loaded successfully', async () => {
    const {findByTestId, findAllByTestId} = render(<WeatherHomeScreen />, {
      wrapper: ProvidersWrapper,
    });

    const weatherList = await findByTestId('weather-list');
    const weatherItems = await findAllByTestId(/^weather-item-/);

    await waitFor(() => {
      expect(weatherList).toBeOnTheScreen();
      expect(weatherItems.length).toBe(WEATHER_DATA_RESPONSE.list.length);
    });
  });

  it('should display correct weather data', async () => {
    const {findByTestId, findByText} = render(<WeatherHomeScreen />, {
      wrapper: ProvidersWrapper,
    });

    const firstWeatherItem = WEATHER_DATA_RESPONSE.list[0];

    const weatherItem = await findByTestId(
      `weather-item-${firstWeatherItem.id}`,
    );
    const weatherItemName = await findByText(firstWeatherItem.name);

    await waitFor(() => {
      expect(weatherItem).toBeOnTheScreen();
      expect(weatherItemName).toBeOnTheScreen();
    });
  });
});

describe('WeatherHomeScreen - empty', () => {
  it('should display an no items message when weather data is empty', async () => {
    setupWeatherEmptyDataHandler();

    const {findByTestId} = render(<WeatherHomeScreen />, {
      wrapper: ProvidersWrapper,
    });

    const emptyList = await findByTestId('empty-list');

    await waitFor(() => {
      expect(emptyList).toBeOnTheScreen();
    });
  });
});

describe('WeatherHomeScreen - failed', () => {
  it('should display an error message when weather data failed to fetch', async () => {
    setupWeatherFailedHandler();

    const {findByTestId} = render(<WeatherHomeScreen />, {
      wrapper: ProvidersWrapper,
    });

    const errorComponent = await findByTestId('error-message');

    await waitFor(() => {
      expect(errorComponent).toBeOnTheScreen();
    });
  });
});
