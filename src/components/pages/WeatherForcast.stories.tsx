import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import WeatherForcast from './WeatherForecast';

const queryClient = new QueryClient();

export default {
  component: WeatherForcast,
  title: 'WeatherForcast',
  decorators: [
    // eslint-disable-next-line
    (story: () => JSX.Element) => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Default: FC = () => <WeatherForcast />;
