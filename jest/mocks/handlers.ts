import {http, HttpResponse} from 'msw';
import Config from 'react-native-config';

import {WEATHER_DATA_RESPONSE} from './data';
import {server} from './server';

const OPEN_WEATHER_API_BASE_URL = Config.OPEN_WEATHER_API_BASE_URL;

export const setupWeatherSuccessHandler = () => {
  server.use(
    http.get(`${OPEN_WEATHER_API_BASE_URL}/data/2.5/group`, () => {
      return HttpResponse.json(WEATHER_DATA_RESPONSE, {status: 200});
    }),
  );
};

export const setupWeatherEmptyDataHandler = () => {
  server.use(
    http.get(`${OPEN_WEATHER_API_BASE_URL}/data/2.5/group`, () => {
      return HttpResponse.json({list: []}, {status: 200});
    }),
  );
};

export const setupWeatherFailedHandler = () => {
  server.use(
    http.get(`${OPEN_WEATHER_API_BASE_URL}/data/2.5/group`, () => {
      return HttpResponse.error();
    }),
  );
};
