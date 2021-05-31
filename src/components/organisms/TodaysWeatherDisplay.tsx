import { FC, useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Typography from '../atoms/Typography';

import Loading from '../molecules/Loading';
import TemperatureDisplay from '../molecules/TemperatureDisplay';
import TemperatureImage from '../molecules/TemperatureImage';

// import forecastAPIKey from '../../config/config';

import { Location } from '../../types/location';
import { Weather } from '../../types/weather';

type Props = {
  location: Location;
};

type Response = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: Weather;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    // eslint-disable-next-line
    feels_like: number;
    // eslint-disable-next-line
    temp_min: number;
    // eslint-disable-next-line
    temp_max: number;
    pressure: number;
    humidity: number;
    // eslint-disable-next-line
    sea_level: number;
    // eslint-disable-next-line
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

type Forecast = {
  weather: Weather | null;
  maxTemp: number | null;
  minTemp: number | null;
};

const defualtForecast: Forecast = {
  weather: null,
  maxTemp: null,
  minTemp: null,
};

const weatherMap = {
  Thunderstorm: '雷雨',
  Drizzle: '霧雨',
  Rain: '雨',
  Snow: '雪',
  Mist: '霧',
  Smoke: '煙',
  Haze: '薄霧',
  Dust: '砂煙',
  Fog: '霧',
  Sand: '砂嵐',
  Ash: '火山灰',
  Squall: 'スコール',
  Tornado: '竜巻',
  Clear: '晴れ',
  Clouds: '曇り',
};

const container = css`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(4, 1fr);
`;

const image = css`
  grid-column: 1;
  grid-row: 1 / 4;
  height: 100%;
`;

const maxTemperature = css`
  grid-column: 2;
  grid-row: 2;
`;

const minTemperature = css`
  grid-column: 2;
  grid-row: 3;
`;

const forecastTypography = css`
  grid-column: 1;
  grid-row: 4;
  margin: 0 auto;
`;

const TodaysWeatherDisplay: FC<Props> = ({ location }) => {
  const [forecast, setForecast] = useState(defualtForecast);
  const forecastAPIKey = process.env.REACT_APP_FORECAST_API_KEY;

  // eslint-disable-next-line
  console.log(`forecastAPIKey : ${forecastAPIKey}`);

  const { isLoading, data } = useQuery(
    `getTodayForecast${location.latitude?.toString() ?? 'undefined'}${
      location.longitude?.toString() ?? 'undefined'
    }`,
    async () => {
      if (location.latitude === null || location.longitude === null)
        return undefined;

      if (forecastAPIKey === undefined) return undefined;

      const result = await axios.get<Response>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude.toString()}2&lon=${location.longitude.toString()}&appid=${forecastAPIKey}`,
      );

      return result;
    },
  );

  useEffect(() => {
    if (data) {
      setForecast({
        weather: data.data.weather[0].main,
        maxTemp: data.data.main.temp_max,
        minTemp: data.data.main.temp_min,
      });
    }
  }, [data]);

  return (
    <>
      {isLoading ||
      location.latitude === null ||
      location.longitude === null ? (
        <Loading />
      ) : (
        <div css={container}>
          <div css={image}>
            <TemperatureImage weather={forecast.weather ?? 'Clear'} />
          </div>
          <div css={forecastTypography}>
            <Typography>
              {forecast.weather && weatherMap[forecast.weather]}
            </Typography>
          </div>
          <div css={maxTemperature}>
            <TemperatureDisplay
              temperature={forecast.maxTemp ?? 0}
              highestOrLowest="HIGHEST"
            />
            <Typography>最高気温</Typography>
          </div>
          <div css={minTemperature}>
            <TemperatureDisplay
              temperature={forecast.minTemp ?? 0}
              highestOrLowest="LOWEST"
            />
            <Typography>最低気温</Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default TodaysWeatherDisplay;
