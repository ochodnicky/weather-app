export type WeatherItemProps = {
  name: string;
  conditions: string;
  temperature: number;
  icon: string;
  list?: boolean;
  onPress?: () => void;
  testID?: string;
};

export const WeatherItemDefaultProps: Omit<
  WeatherItemProps,
  'name' | 'conditions' | 'temperature' | 'icon'
> = {
  list: false,
  onPress: () => {},
  testID: undefined,
};
