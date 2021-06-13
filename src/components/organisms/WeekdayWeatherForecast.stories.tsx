import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import WeekdayWeatherForecast from './WeekdayWeatherForecast';

const queryClient = new QueryClient();
const mock = new MockAdapter(axios);

const serverResponse = {
  lat: 35,
  lon: 135,
  timezone: 'Asia/Tokyo',
  timezone_offset: 32400,
  daily: [
    {
      dt: 1623376800,
      sunrise: 1623354339,
      sunset: 1623406425,
      moonrise: 1623355440,
      moonset: 1623409500,
      moon_phase: 0.02,
      temp: {
        day: 298.85,
        min: 291.15,
        max: 299.61,
        night: 294.2,
        eve: 294.93,
        morn: 291.15,
      },
      feels_like: {
        day: 298.7,
        night: 294.29,
        eve: 294.91,
        morn: 291.3,
      },
      pressure: 1017,
      humidity: 47,
      dew_point: 286.46,
      wind_speed: 5.2,
      wind_deg: 183,
      wind_gust: 13.02,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 100,
      pop: 0,
      uvi: 7.74,
    },
    {
      dt: 1623463200,
      sunrise: 1623440736,
      sunset: 1623492850,
      moonrise: 1623444660,
      moonset: 1623499020,
      moon_phase: 0.05,
      temp: {
        day: 294.69,
        min: 291.99,
        max: 297.11,
        night: 292.92,
        eve: 296.54,
        morn: 293.01,
      },
      feels_like: {
        day: 294.86,
        night: 293.2,
        eve: 296.81,
        morn: 293.14,
      },
      pressure: 1017,
      humidity: 75,
      dew_point: 289.74,
      wind_speed: 4.55,
      wind_deg: 193,
      wind_gust: 10.52,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.52,
      rain: 0.69,
      uvi: 5.67,
    },
    {
      dt: 1623553200,
      sunrise: 1623527135,
      sunset: 1623579275,
      moonrise: 1623534180,
      moonset: 1623588300,
      moon_phase: 0.08,
      temp: {
        day: 297.14,
        min: 292.51,
        max: 298.56,
        night: 292.51,
        eve: 296.53,
        morn: 293.46,
      },
      feels_like: {
        day: 297.5,
        night: 292.83,
        eve: 296.96,
        morn: 293.82,
      },
      pressure: 1012,
      humidity: 73,
      dew_point: 291.56,
      wind_speed: 3.28,
      wind_deg: 219,
      wind_gust: 4.61,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.56,
      rain: 0.13,
      uvi: 6.5,
    },
    {
      dt: 1623639600,
      sunrise: 1623613535,
      sunset: 1623665698,
      moonrise: 1623624060,
      moonset: 1623677280,
      moon_phase: 0.12,
      temp: {
        day: 300.42,
        min: 291.59,
        max: 302.09,
        night: 294.22,
        eve: 297.56,
        morn: 292.79,
      },
      feels_like: {
        day: 301.92,
        night: 294.76,
        eve: 298.15,
        morn: 293.16,
      },
      pressure: 1008,
      humidity: 64,
      dew_point: 292.56,
      wind_speed: 1.7,
      wind_deg: 10,
      wind_gust: 1.9,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 63,
      pop: 0.64,
      rain: 4.94,
      uvi: 9.02,
    },
    {
      dt: 1623726000,
      sunrise: 1623699937,
      sunset: 1623752120,
      moonrise: 1623714120,
      moonset: 1623765960,
      moon_phase: 0.15,
      temp: {
        day: 297.45,
        min: 292.32,
        max: 300.18,
        night: 293.49,
        eve: 296.57,
        morn: 293.09,
      },
      feels_like: {
        day: 297.74,
        night: 293.72,
        eve: 296.77,
        morn: 293.49,
      },
      pressure: 1009,
      humidity: 69,
      dew_point: 291.13,
      wind_speed: 2.77,
      wind_deg: 230,
      wind_gust: 4.6,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 100,
      pop: 0.56,
      uvi: 7.84,
    },
    {
      dt: 1623812400,
      sunrise: 1623786341,
      sunset: 1623838541,
      moonrise: 1623804300,
      moonset: 1623854400,
      moon_phase: 0.18,
      temp: {
        day: 303.94,
        min: 291.58,
        max: 304.72,
        night: 294.24,
        eve: 298.56,
        morn: 292.76,
      },
      feels_like: {
        day: 304.71,
        night: 294.6,
        eve: 298.98,
        morn: 293.1,
      },
      pressure: 1009,
      humidity: 46,
      dew_point: 290.56,
      wind_speed: 1.26,
      wind_deg: 199,
      wind_gust: 2.51,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 12,
      pop: 0.36,
      rain: 0.45,
      uvi: 8,
    },
    {
      dt: 1623898800,
      sunrise: 1623872746,
      sunset: 1623924960,
      moonrise: 1623894480,
      moonset: 0,
      moon_phase: 0.21,
      temp: {
        day: 302.27,
        min: 292.13,
        max: 302.69,
        night: 293.82,
        eve: 298.51,
        morn: 293.61,
      },
      feels_like: {
        day: 303.22,
        night: 293.95,
        eve: 298.67,
        morn: 294.04,
      },
      pressure: 1010,
      humidity: 52,
      dew_point: 291.16,
      wind_speed: 3.86,
      wind_deg: 217,
      wind_gust: 5.9,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: 48,
      pop: 0,
      uvi: 8,
    },
    {
      dt: 1623985200,
      sunrise: 1623959153,
      sunset: 1624011378,
      moonrise: 1623984780,
      moonset: 1623942660,
      moon_phase: 0.25,
      temp: {
        day: 298.43,
        min: 293.06,
        max: 300.79,
        night: 294.19,
        eve: 296.99,
        morn: 293.79,
      },
      feels_like: {
        day: 298.55,
        night: 294.39,
        eve: 297.18,
        morn: 294.23,
      },
      pressure: 1009,
      humidity: 59,
      dew_point: 289.46,
      wind_speed: 5.32,
      wind_deg: 193,
      wind_gust: 7.5,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: 100,
      pop: 0,
      uvi: 8,
    },
  ],
};

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

export const Defualt: FC = () => {
  mock
    .onGet(/https:\/\/api.openweathermap.org\/data\/2.5\/onecall/)
    .reply(200, serverResponse);

  return <WeekdayWeatherForecast location={{ latitude: 35, longitude: 135 }} />;
};

export const Scroll: FC = () => {
  mock
    .onGet(/https:\/\/api.openweathermap.org\/data\/2.5\/onecall/)
    .reply(200, serverResponse);

  return (
    <div css={scrollContainer}>
      <WeekdayWeatherForecast location={{ latitude: 35, longitude: 135 }} />
    </div>
  );
};
