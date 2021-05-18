import { FC } from 'react';
import WeatherForcast from './WeatherForecast';

export default {
  component: WeatherForcast,
  title: 'WeatherForcast',
};

export const Default: FC = () => <WeatherForcast />;
