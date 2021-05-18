import { FC } from 'react';
import TemperatureDisplay from './TemperatureDisplay';

export default {
  component: TemperatureDisplay,
  title: 'TemperatureDisplay',
};

export const HighestTemperature: FC = () => (
  <TemperatureDisplay temperature={22} highestOrLowest="HIGHEST" />
);

export const LowestTemperature: FC = () => (
  <TemperatureDisplay temperature={22} highestOrLowest="LOWEST" />
);
