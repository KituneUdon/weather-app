import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import TemperatureLineChart from './TemperatureLineChart';

const queryClient = new QueryClient();

export default {
  component: TemperatureLineChart,
  title: 'TemperatureLineChart',
  decorators: [
    // eslint-disable-next-line
    (story: () => JSX.Element) => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Default: FC = () => (
  <TemperatureLineChart location={{ latitude: 35, longitude: 139 }} />
);
