import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import WeekdayWeatherForecastItem from './WeekdayWeatherForecastItem';

const queryClient = new QueryClient();

export default {
  component: WeekdayWeatherForecastItem,
  title: 'WeekdayTemperatureForecastItem',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Defualt: FC = () => (
  <WeekdayWeatherForecastItem
    date="05/23"
    weather="Clear"
    lowestTemperature={22}
    highestTemperature={23}
  />
);
