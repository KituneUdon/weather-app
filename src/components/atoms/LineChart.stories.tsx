import { FC } from 'react';
import LineGraph from './LineChart';

export default {
  component: LineGraph,
  title: 'atoms/LineGraph',
};

const data = [
  { time: '0時', temperature: 20 },
  { time: '3時', temperature: 23 },
  { time: '6時', temperature: 25 },
  { time: '9時', temperature: 21 },
  { time: '12時', temperature: 23 },
  { time: '15時', temperature: 22 },
  { time: '18時', temperature: 22 },
  { time: '21時', temperature: 22 },
  { time: '24時', temperature: 22 },
];

export const Default: FC = () => <LineGraph data={data} />;
