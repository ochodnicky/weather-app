import axios from 'axios';

import {ENVIRONMENT_VARIABLES} from '@/constants/env.const';

export const apiClient = axios.create({
  baseURL: ENVIRONMENT_VARIABLES.OPEN_WEATHER_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: ENVIRONMENT_VARIABLES.OPEN_WEATHER_API_KEY,
  },
});
