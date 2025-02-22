import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ScreenName} from '@/navigation/Navigation.enums';
import {Weather} from '@/types/weather.types';

export type WeatherStackParamList = {
  [ScreenName.WeatherHome]: undefined;
  [ScreenName.WeatherDetails]: {
    weatherItem: Weather;
  };
};

export type WeatherStackProps<T extends keyof WeatherStackParamList> =
  NativeStackScreenProps<WeatherStackParamList, T>;
