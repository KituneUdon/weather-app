import { FC } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import Typography from '../atoms/Typography';

import { Location } from '../../types/location';

type Props = {
  location: Location;
};

type Response = {
  response: {
    location?: {
      city: string;
      // eslint-disable-next-line
      city_kana: string;
      town: string;
      // eslint-disable-next-line
      town_kana: string;
      x: string;
      y: string;
      distance: number;
      prefecture: string;
      postal: string;
    }[];
    error?: string;
  };
};

const CurrentLocation: FC<Props> = ({ location }) => {
  const { isLoading, data } = useQuery(
    `getPlaceName${location.latitude?.toString() ?? 'undefined'}${
      location.longitude?.toString() ?? 'undefined'
    }`,
    async () => {
      if (location.latitude === null || location.longitude === null) {
        return undefined;
      }

      const response = axios.get<Response>(
        `http://geoapi.heartrails.com/api/json?method=searchByGeoLocation&y=${location.latitude}&x=${location.longitude}`,
      );

      return response;
    },
  );

  const jsx =
    data?.data.response?.location !== undefined ? (
      <Typography>
        5/21 {data.data.response.location[0].prefecture}{' '}
        {data.data.response.location[0].city} の天気
      </Typography>
    ) : (
      <Typography>都市名の取得に失敗しました</Typography>
    );

  return (
    <>
      {isLoading ||
      (location.latitude === null && location.longitude === null) ? (
        <Typography>現在地取得中</Typography>
      ) : (
        jsx
      )}
    </>
  );
};

export default CurrentLocation;
