import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import CurrentLocation from './CurrentLocation';

const queryClient = new QueryClient();

const mock = new MockAdapter(axios);

const serverResponse = {
  response: {
    location: [
      {
        city: '西脇市',
        city_kana: 'にしわきし',
        town: '上比延町',
        town_kana: 'かみひえちょう',
        x: '135.005213',
        y: '35.001111',
        distance: 491.18291654385115,
        prefecture: '兵庫県',
        postal: '6770039',
      },
    ],
  },
};

const faitalServerResponse = {
  response: { error: "Cities around x:'1000.0', y:'35.0' do not exist." },
};

export default {
  component: CurrentLocation,
  title: 'organisms/CurrentLocation',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    ),
  ],
};

export const Default: FC = () => {
  mock
    .onGet(
      'https://geoapi.heartrails.com/api/json?method=searchByGeoLocation&y=35&x=135',
    )
    .reply(200, serverResponse);

  return <CurrentLocation location={{ latitude: 35, longitude: 135 }} />;
};

export const Fatail: FC = () => {
  mock
    .onGet(
      'https://geoapi.heartrails.com/api/json?method=searchByGeoLocation&y=35&x=135',
    )
    .reply(200, faitalServerResponse);

  return <CurrentLocation location={{ latitude: 35, longitude: 135 }} />;
};
