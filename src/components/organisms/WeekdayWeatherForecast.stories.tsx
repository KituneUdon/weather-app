import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import WeekdayWeatherForecast from './WeekdayWeatherForecast';

const queryClient = new QueryClient();

export default {
  component: WeekdayWeatherForecast,
  title: 'organisms/WeekdayTemperatureForecast',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Defualt: FC = () => (
  <WeekdayWeatherForecast location={{ latitude: 35, longitude: 139 }} />
);
