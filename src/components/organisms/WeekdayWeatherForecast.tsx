import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import axios from 'axios';
import dayjs from 'dayjs';

import Typography from '../atoms/Typography';

import Loading from '../molecules/Loading';

import WeekdayWeatherForecastItem from './WeekdayWeatherForecastItem';

import { Location } from '../../types/location';
import { Weather } from '../../types/weather';

type Props = {
  location: Location;
};

const weekdayForecastContainer = css`
  display: flex;
  width: 100%;
  overflow-x: scroll;
`;

type Response = {
  lat: number;
  lon: number;
  timezone: string;
  // eslint-disable-next-line
  timezone_offset: number;
  daily: [
    {
      dt: number;
      sunrise: number;
      sunset: number;
      moonrise: number;
      moonset: number;
      // eslint-disable-next-line
      moon_phase: number;
      temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
      };
      // eslint-disable-next-line
      feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
      };
      pressure: number;
      humidity: number;
      // eslint-disable-next-line
      dew_point: number;
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
      clouds: number;
      pop: number;
      rain: number;
      uvi: number;
    },
  ];
};

const WeekdayWeatherForecast: FC<Props> = ({ location }) => {
  const forecastAPIKey = process.env.REACT_APP_FORECAST_API_KEY;

  const { data } = useQuery(
    `getOneWeekForecast${location.latitude?.toString() ?? 'undefined'}${
      location.longitude?.toString() ?? 'undefined'
    }`,
    async () => {
      if (location.latitude === null || location.longitude === null)
        return undefined;

      if (forecastAPIKey === undefined) return undefined;

      const result = await axios.get<Response>(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=current,minutely,hourly&appid=${forecastAPIKey}`,
      );

      return result;
    },
  );

  const dailyForecast = data?.data.daily.slice(1, 7);

  return (
    <>
      <Typography>1週間予報</Typography>
      <div css={weekdayForecastContainer}>
        {dailyForecast ? (
          dailyForecast !== undefined &&
          dailyForecast.map((d) => (
            <WeekdayWeatherForecastItem
              date={dayjs.unix(d.dt).format('MM/DD')}
              weather={d.weather[0].main}
              highestTemperature={d.temp.max}
              lowestTemperature={d.temp.min}
              key={d.dt}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default WeekdayWeatherForecast;
