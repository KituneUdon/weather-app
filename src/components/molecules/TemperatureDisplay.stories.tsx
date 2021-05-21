import { FC } from 'react';
import TemperatureDisplay from './TemperatureDisplay';

export default {
  component: TemperatureDisplay,
  title: 'TemperatureDisplay',
};

export const HighestTemperature: FC = () => (
  <TemperatureDisplay temperature={290} highestOrLowest="HIGHEST" />
);

export const LowestTemperature: FC = () => (
  <TemperatureDisplay temperature={283} highestOrLowest="LOWEST" />
);
