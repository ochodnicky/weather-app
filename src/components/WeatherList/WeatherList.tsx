import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';
import {useQuery} from '@tanstack/react-query';
import {Divider} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {getWeatherData} from '@/api/weather';
import {ErrorComponent} from '@/components/ErrorComponent/ErrorComponent';
import {LoadingComponent} from '@/components/LoadingComponent/LoadingComponent';
import {WeatherItem} from '@/components/WeatherItem/WeatherItem';
import {CITIES} from '@/constants/cities.const';
import {ScreenName} from '@/navigation/Navigation.enums';
import {WeatherStackProps} from '@/navigation/RootNavigator/RootStackNavigator.types';
import {Weather} from '@/types/weather.types';

import {EmptyList} from '../EmptyList/EmptyList';

export const WeatherList = () => {
  const {bottom} = useSafeAreaInsets();

  const {navigate} =
    useNavigation<WeatherStackProps<ScreenName.WeatherHome>['navigation']>();

  const {data, isError, isPending, refetch} = useQuery({
    queryKey: ['weather', 'cities'],
    queryFn: () => getWeatherData(CITIES),
  });

  const keyExtractor = useCallback((item: Weather) => item.id.toString(), []);

  const onItemPress = useCallback(
    (item: Weather) => {
      navigate(ScreenName.WeatherDetails, {weatherItem: item});
    },
    [navigate],
  );

  const renderItem = useCallback(
    ({item}: {item: Weather}) => {
      return (
        <WeatherItem
          onPress={() => onItemPress(item)}
          name={item.name}
          conditions={item.conditions}
          icon={item.conditionsIcon}
          temperature={item.temperature}
          list
          testID={`weather-item-${item.id}`}
        />
      );
    },
    [onItemPress],
  );

  if (isPending) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <ErrorComponent onRetry={refetch} />;
  }

  return (
    <FlashList
      contentContainerStyle={{
        paddingBottom: bottom,
      }}
      keyExtractor={keyExtractor}
      data={data}
      refreshing={isPending}
      onRefresh={refetch}
      estimatedItemSize={84}
      renderItem={renderItem}
      ItemSeparatorComponent={Divider}
      ListEmptyComponent={<EmptyList />}
      testID="weather-list"
    />
  );
};
