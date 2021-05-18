import { FC } from 'react';
import WeekdayWeatherForecastItem from './WeekdayWeatherForecastItem';

export default {
  component: WeekdayWeatherForecastItem,
  title: 'WeekdayTemperatureForecastItem',
};

export const Defualt: FC = () => (
  <WeekdayWeatherForecastItem
    date="2021/05/23"
    weather="sunny"
    lowestTemperature={22}
    highestTemperature={23}
  />
);
