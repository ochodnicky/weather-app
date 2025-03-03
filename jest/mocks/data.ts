import {Weather, WeatherResponse} from '@/types/weather.types';

export const PARSED_WEATHER_DATA: Weather = {
  id: 703448,
  name: 'Kyiv',
  temperature: 8.73,
  conditions: 'Clouds',
  conditionsIcon: '04d',
  humidity: 80,
  pressure: 1023,
  windSpeed: 3,
  cloudCoverage: 100,
};

export const WEATHER_DATA_RESPONSE: WeatherResponse = {
  cnt: 11,
  list: [
    {
      coord: {lon: 30.5167, lat: 50.4333},
      sys: {
        country: 'UA',
        timezone: 7200,
        sunrise: 1704693412,
        sunset: 1704723081,
      },
      weather: [
        {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'},
      ],
      main: {
        temp: 8.73,
        feels_like: 3,
        temp_min: 8.73,
        temp_max: 8.73,
        pressure: 1023,
        humidity: 80,
      },
      visibility: 10000,
      wind: {speed: 3, deg: 349},
      clouds: {all: 100},
      dt: 1704701349,
      id: 703448,
      name: 'Kyiv',
    },
    {
      coord: {lon: 34.8003, lat: 50.9216},
      sys: {
        country: 'UA',
        timezone: 7200,
        sunrise: 1704692516,
        sunset: 1704721920,
      },
      weather: [
        {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'},
      ],
      main: {
        temp: 7.09,
        feels_like: -5.51,
        temp_min: 7.09,
        temp_max: 7.09,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1006,
        humidity: 83,
      },
      visibility: 10000,
      wind: {speed: 13.98, deg: 57},
      clouds: {all: 100},
      dt: 1704701349,
      id: 692194,
      name: 'Sumy',
    },
    {
      coord: {lon: 21.0118, lat: 52.2298},
      sys: {
        country: 'PL',
        timezone: 3600,
        sunrise: 1704696197,
        sunset: 1704724860,
      },
      weather: [
        {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'},
      ],
      main: {
        temp: 10.58,
        feels_like: -2.02,
        temp_min: 8.42,
        temp_max: 11.21,
        pressure: 1031,
        humidity: 73,
      },
      visibility: 10000,
      wind: {speed: 10.36, deg: 40},
      clouds: {all: 0},
      dt: 1704701350,
      id: 756135,
      name: 'Warsaw',
    },
    {
      coord: {lon: 17.0333, lat: 51.1},
      sys: {
        country: 'PL',
        timezone: 3600,
        sunrise: 1704696828,
        sunset: 1704726138,
      },
      weather: [
        {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'},
      ],
      main: {
        temp: 13.98,
        feels_like: 1.96,
        temp_min: 13.41,
        temp_max: 15.82,
        pressure: 1031,
        humidity: 83,
      },
      visibility: 10000,
      wind: {speed: 9.22, deg: 10},
      clouds: {all: 100},
      dt: 1704698462,
      id: 3081368,
      name: 'Wroclaw',
    },
    {
      coord: {lon: 14.4208, lat: 50.088},
      sys: {
        country: 'CZ',
        timezone: 3600,
        sunrise: 1704697182,
        sunset: 1704727039,
      },
      weather: [
        {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'},
      ],
      main: {
        temp: 18.21,
        feels_like: 5.61,
        temp_min: 15.46,
        temp_max: 20.97,
        pressure: 1025,
        humidity: 77,
      },
      visibility: 10000,
      wind: {speed: 14.97, deg: 20},
      clouds: {all: 0},
      dt: 1704698553,
      id: 3067696,
      name: 'Prague',
    },
    {
      coord: {lon: 14.4743, lat: 48.9745},
      sys: {
        country: 'CZ',
        timezone: 3600,
        sunrise: 1704696885,
        sunset: 1704727310,
      },
      weather: [
        {id: 600, main: 'Snow', description: 'light snow', icon: '13d'},
      ],
      main: {
        temp: 21.83,
        feels_like: 14.13,
        temp_min: 19.99,
        temp_max: 22.89,
        pressure: 1018,
        humidity: 90,
      },
      visibility: 10000,
      wind: {speed: 5.99, deg: 330},
      clouds: {all: 100},
      dt: 1704698460,
      id: 3077916,
      name: 'Ceske Budejovice',
    },
    {
      coord: {lon: 13.4105, lat: 52.5244},
      sys: {
        country: 'DE',
        timezone: 3600,
        sunrise: 1704698108,
        sunset: 1704726598,
      },
      weather: [
        {id: 800, main: 'Clear', description: 'clear sky', icon: '01d'},
      ],
      main: {
        temp: 18.3,
        feels_like: 6.53,
        temp_min: 16.86,
        temp_max: 20.07,
        pressure: 1020,
        humidity: 79,
      },
      visibility: 10000,
      wind: {speed: 10.36, deg: 50},
      clouds: {all: 0},
      dt: 1704701701,
      id: 2950159,
      name: 'Berlin',
    },
    {
      coord: {lon: 11.5755, lat: 48.1374},
      sys: {
        country: 'DE',
        timezone: 3600,
        sunrise: 1704697377,
        sunset: 1704728210,
      },
      weather: [
        {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d'},
      ],
      main: {
        temp: 23.63,
        feels_like: 18.41,
        temp_min: 21.63,
        temp_max: 24.98,
        pressure: 1021,
        humidity: 91,
      },
      visibility: 10000,
      wind: {speed: 4, deg: 13},
      clouds: {all: 93},
      dt: 1704701659,
      id: 2867714,
      name: 'Munich',
    },
    {
      coord: {lon: 6.0834, lat: 50.7766},
      sys: {
        country: 'DE',
        timezone: 3600,
        sunrise: 1704699367,
        sunset: 1704728857,
      },
      weather: [
        {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n'},
      ],
      main: {
        temp: 26.44,
        feels_like: 15.12,
        temp_min: 24.85,
        temp_max: 27.93,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1006,
        humidity: 88,
      },
      visibility: 10000,
      wind: {speed: 13.47, deg: 38},
      clouds: {all: 99},
      dt: 1704698545,
      id: 3247449,
      name: 'Aachen',
    },
    {
      coord: {lon: -120.5015, lat: 47.5001},
      sys: {
        country: 'US',
        timezone: -28800,
        sunrise: 1704728918,
        sunset: 1704760084,
      },
      weather: [
        {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n'},
      ],
      main: {
        temp: 27.14,
        feels_like: 22.93,
        temp_min: 23.94,
        temp_max: 30.58,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 960,
        humidity: 66,
      },
      visibility: 10000,
      wind: {speed: 3.62, deg: 288},
      clouds: {all: 100},
      dt: 1704698709,
      id: 5815135,
      name: 'Washington',
    },
    {
      coord: {lon: -74.006, lat: 40.7143},
      sys: {
        country: 'US',
        timezone: -18000,
        sunrise: 1704716394,
        sunset: 1704750284,
      },
      weather: [
        {id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n'},
      ],
      main: {
        temp: 36.36,
        feels_like: 28,
        temp_min: 33.06,
        temp_max: 38.21,
        pressure: 1019,
        humidity: 71,
      },
      visibility: 10000,
      wind: {speed: 12.66, deg: 320},
      clouds: {all: 100},
      dt: 1704698542,
      id: 5128581,
      name: 'New York',
    },
  ],
};
