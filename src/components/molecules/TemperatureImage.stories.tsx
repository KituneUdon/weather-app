import { FC } from 'react';
import TemperatureImage from './TemperatureImage';

export default {
  component: TemperatureImage,
  title: 'TemperatureImage',
};

export const Sunny: FC = () => <TemperatureImage weather="sunny" />;
export const Rain: FC = () => <TemperatureImage weather="rain" />;
export const Cloudy: FC = () => <TemperatureImage weather="cloudy" />;
