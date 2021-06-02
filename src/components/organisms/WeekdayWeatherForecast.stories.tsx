import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import WeekdayWeatherForecast from './WeekdayWeatherForecast';

const queryClient = new QueryClient();

const scrollContainer = css`
  width: 300px;
`;

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

export const Scroll: FC = () => (
  <div css={scrollContainer}>
    <WeekdayWeatherForecast location={{ latitude: 35, longitude: 139 }} />
  </div>
);
