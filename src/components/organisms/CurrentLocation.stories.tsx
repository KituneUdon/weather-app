import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import CurrentLocation from './CurrentLocation';

const queryClient = new QueryClient();

export default {
  component: CurrentLocation,
  title: 'organisms/CurrentLocation',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Default: FC = () => (
  <CurrentLocation location={{ latitude: 35, longitude: 139 }} />
);
