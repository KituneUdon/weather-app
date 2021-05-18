import { FC } from 'react';
import TodaysWeatherDisplay from './TodaysWeatherDisplay';

export default {
  component: TodaysWeatherDisplay,
  title: 'TodaysWeatherDisplay',
};

export const Default: FC = () => <TodaysWeatherDisplay weather="sunny" />;
