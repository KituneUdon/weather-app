import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import TodaysWeatherDisplay from './TodaysWeatherDisplay';

const queryClient = new QueryClient();
const mock = new MockAdapter(axios);

const mockResponse = {
  coord: { lon: 135, lat: 35 },
  weather: [
    { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04d' },
  ],
  base: 'stations',
  main: {
    temp: 295.06,
    feels_like: 295.16,
    temp_min: 294.08,
    temp_max: 298.82,
    pressure: 1017,
    humidity: 71,
    sea_level: 1017,
    grnd_level: 1007,
  },
  visibility: 10000,
  wind: { speed: 3.62, deg: 181, gust: 10.21 },
  clouds: { all: 100 },
  dt: 1623405372,
  sys: {
    type: 2,
    id: 19913,
    country: 'JP',
    sunrise: 1623354339,
    sunset: 1623406425,
  },
  timezone: 32400,
  id: 1855134,
  name: 'Nishiwaki',
  cod: 200,
};

export default {
  component: TodaysWeatherDisplay,
  title: 'organisms/TodaysWeatherDisplay',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

mock
  .onGet(
    /^https:\/\/api.openweathermap.org\/data\/2.5\/weather\?lat=\d+(?:\.\d+)?&lon=\d+(?:\.\d+)?&appid=.*$/,
  )
  .reply(200, mockResponse);

export const Default: FC = () => (
  <TodaysWeatherDisplay location={{ latitude: 35, longitude: 135 }} />
);
