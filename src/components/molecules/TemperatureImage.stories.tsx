import { FC } from 'react';
import TemperatureImage from './TemperatureImage';

export default {
  component: TemperatureImage,
  title: 'molecules/TemperatureImage',
};

export const Thunderstorm: FC = () => (
  <TemperatureImage weather="Thunderstorm" />
);
export const Dizzle: FC = () => <TemperatureImage weather="Drizzle" />;
export const Rain: FC = () => <TemperatureImage weather="Rain" />;
export const Snow: FC = () => <TemperatureImage weather="Snow" />;
export const Mist: FC = () => <TemperatureImage weather="Mist" />;
export const Smoke: FC = () => <TemperatureImage weather="Smoke" />;
export const Haze: FC = () => <TemperatureImage weather="Haze" />;
export const Dust: FC = () => <TemperatureImage weather="Dust" />;
export const Fog: FC = () => <TemperatureImage weather="Fog" />;
export const Sand: FC = () => <TemperatureImage weather="Sand" />;
export const Ash: FC = () => <TemperatureImage weather="Ash" />;
export const Squall: FC = () => <TemperatureImage weather="Squall" />;
export const Tornado: FC = () => <TemperatureImage weather="Tornado" />;
export const Clear: FC = () => <TemperatureImage weather="Clear" />;
export const Clouds: FC = () => <TemperatureImage weather="Clouds" />;
