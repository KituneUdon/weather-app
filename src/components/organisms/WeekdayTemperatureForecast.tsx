import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import WeekdayTemperatureForecastItem, {
  WeekdayTemperatureForecastItemProps,
} from './WeekdayTemperatureForecastItem';

const container = css({
  display: 'flex',
});

const WeekdayTemperatureForecast: FC = () => {
  const data: WeekdayTemperatureForecastItemProps[] = [
    {
      date: '5/23',
      weather: 'sunny',
      lowestTemperature: 19,
      highestTemperature: 23,
    },
    {
      date: '5/24',
      weather: 'sunny',
      lowestTemperature: 19,
      highestTemperature: 23,
    },
    {
      date: '5/25',
      weather: 'sunny',
      lowestTemperature: 19,
      highestTemperature: 23,
    },
    {
      date: '5/26',
      weather: 'sunny',
      lowestTemperature: 19,
      highestTemperature: 23,
    },
    {
      date: '5/27',
      weather: 'sunny',
      lowestTemperature: 19,
      highestTemperature: 23,
    },
    {
      date: '5/28',
      weather: 'sunny',
      lowestTemperature: 19,
      highestTemperature: 23,
    },
    {
      date: '5/29',
      weather: 'sunny',
      lowestTemperature: 19,
      highestTemperature: 23,
    },
  ];

  return (
    <div css={container}>
      {data.map((d) => (
        <WeekdayTemperatureForecastItem
          date={d.date}
          weather={d.weather}
          highestTemperature={d.highestTemperature}
          lowestTemperature={d.highestTemperature}
        />
      ))}
    </div>
  );
};

export default WeekdayTemperatureForecast;
