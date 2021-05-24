import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import TodaysWeatherDisplay from './TodaysWeatherDisplay';

const queryClient = new QueryClient();

export default {
  component: TodaysWeatherDisplay,
  title: 'organisms/sTodaysWeatherDisplay',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Default: FC = () => (
  <TodaysWeatherDisplay location={{ latitude: 35, longitude: 139 }} />
);
