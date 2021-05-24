import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

import WeatherForcastTemplate from './WeathreForecastTemplate';

import { Location } from '../../types/location';

const queryClient = new QueryClient();

export default {
  component: WeatherForcastTemplate,
  title: 'templates/WeatherForcastTemplate',
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

const location = {
  latitude: 35,
  longitude: 135,
};

// ダミーのsetLocation
// locationを内部で参照していないため、ESLintでwarmingが出る
// ダミーの関数のため、eslintを無効化して対応
// eslint-disable-next-line
const setLocation = (location: Location) => ({});

export const Default: FC = () => (
  <WeatherForcastTemplate location={location} setLocation={setLocation} />
);
