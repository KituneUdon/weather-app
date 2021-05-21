import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import WeekdayWeatherForecast from './WeekdayWeatherForecast';

const queryClient = new QueryClient();

export default {
  component: WeekdayWeatherForecast,
  title: 'WeekdayTemperatureForecast',
  decorators: [
    // eslint-disable-next-line
    (story: () => JSX.Element) => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Defualt: FC = () => (
  <WeekdayWeatherForecast location={{ latitude: 35, longitude: 139 }} />
);
