export type WeatherDetailRowProps = {
  label: string;
  value: string;
  testID?: string;
};

export const WeatherDetailsRowDefaultProps: Omit<
  WeatherDetailRowProps,
  'label' | 'value'
> = {
  testID: undefined,
};
