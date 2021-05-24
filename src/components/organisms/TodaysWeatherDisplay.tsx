import { FC, useState, useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import axios from 'axios';

import Typography from '../atoms/Typography';

import Loading from '../molecules/Loading';
import TemperatureDisplay from '../molecules/TemperatureDisplay';
import TemperatureImage from '../molecules/TemperatureImage';

import forecastAPIKey from '../../config/config';

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

const container = css({
  display: 'flex',
});

const image = css({
  maxHeight: 400,
  maxWidth: 400,
});

const TodaysWeatherDisplay: FC<Props> = ({ location }) => {
  const [forecast, setForecast] = useState(defualtForecast);

  const { isLoading, data } = useQuery(
    `getTodayForecast${location.latitude?.toString() ?? 'undefined'}${
      location.longitude?.toString() ?? 'undefined'
    }`,
    async () => {
      if (location.latitude === null || location.longitude === null)
        return undefined;

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
          <div>
            <div>
              <TemperatureDisplay
                temperature={forecast.maxTemp ?? 0}
                highestOrLowest="HIGHEST"
              />
              <Typography>最高気温</Typography>
            </div>
            <div>
              <TemperatureDisplay
                temperature={forecast.minTemp ?? 0}
                highestOrLowest="LOWEST"
              />
              <Typography>最低気温</Typography>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodaysWeatherDisplay;
