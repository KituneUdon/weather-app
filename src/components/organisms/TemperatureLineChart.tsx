import { FC } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import dayjs from 'dayjs';
import LineChart from '../atoms/LineChart';
import Typography from '../atoms/Typography';

import { Location } from '../../types/location';
import { Weather } from '../../types/weather';

import forecastAPIKey from '../../config/config';

type Props = {
  location: Location;
};

type Response = {
  lat: number;
  lon: number;
  timezone: string;
  // eslint-disable-next-line
  timezone_offset: number;
  hourly: [
    {
      dt: number;
      temp: number;
      // eslint-disable-next-line
      feels_like: number;
      pressure: number;
      humidity: number;
      // eslint-disable-next-line
      dew_point: number;
      uvi: number;
      clouds: number;
      visibility: number;
      // eslint-disable-next-line
      wind_speed: number;
      // eslint-disable-next-line
      wind_deg: number;
      // eslint-disable-next-line
      wind_gust: number;
      weather: [
        {
          id: number;
          main: Weather;
          description: string;
          icon: string;
        },
      ];
      pop: number;
      rain: {
        '1h': number;
      };
    },
  ];
};

const TempratureLineChart: FC<Props> = ({ location }) => {
  const { data } = useQuery(
    `getDailyTemperature${location.latitude?.toString() ?? 'undefined'}${
      location.longitude?.toString() ?? 'undefined'
    }`,
    async () => {
      if (location.latitude === null || location.longitude === null)
        return undefined;

      const result = await axios.get<Response>(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=current,minutely,daily,alerts&appid=${forecastAPIKey}`,
      );

      return result;
    },
  );

  let jsx = <Typography>現在地取得中</Typography>;

  if (data && (location.latitude !== null || location.longitude !== null)) {
    const temperatureData = data.data.hourly.map((d) => ({
      time: dayjs.unix(d.dt).hour().toString(),
      temperature: d.temp - 273,
    }));

    jsx = (
      <>
        <Typography>今後24時間の気温変化</Typography>
        <LineChart data={temperatureData} />
      </>
    );
  }

  return jsx;
};

export default TempratureLineChart;
