import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

import WeatherForcast from './WeatherForecast';

const queryClient = new QueryClient();

export default {
  component: WeatherForcast,
  title: 'pages/WeatherForcast',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <MemoryRouter initialEntries={['/lincense']}>
        <QueryClientProvider client={queryClient}>
          {story()}
        </QueryClientProvider>
      </MemoryRouter>
    ),
  ],
};

export const Default: FC = () => <WeatherForcast />;
