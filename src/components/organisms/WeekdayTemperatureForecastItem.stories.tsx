import { FC } from 'react';
import WeekdayTemperatureForecastItem from './WeekdayTemperatureForecastItem';

export default {
  component: WeekdayTemperatureForecastItem,
  title: 'WeekdayTemperatureForecastItem',
};

export const Defualt: FC = () => (
  <WeekdayTemperatureForecastItem
    date="2021/05/23"
    weather="sunny"
    lowestTemperature={22}
    highestTemperature={23}
  />
);
