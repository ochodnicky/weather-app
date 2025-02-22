import {apiClient} from '@/api/apiClient';
import {CityWeatherData, Weather, WeatherResponse} from '@/types/weather.types';

export const parseWeatherData = (data: CityWeatherData): Weather => {
  return {
    id: data.id,
    name: data.name,
    temperature: data.main.temp,
    conditions: data.weather[0].main,
    conditionsIcon: data.weather[0].icon,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    windSpeed: data.wind.speed,
    cloudCoverage: data.clouds.all,
  };
};

export const getWeatherData = async (cities: number[]): Promise<Weather[]> => {
  const response = await apiClient.get<WeatherResponse>('/data/2.5/group', {
    params: {
      id: cities.join(','),
      units: 'imperial',
    },
  });

  const parsedData = response.data.list.map(parseWeatherData);

  return parsedData;
};
