import { FC } from 'react';
import LineGraph, { Data } from './LineChart';

export default {
  component: LineGraph,
  title: 'LineGraph',
};

const data: Data[] = [
  { date: '2021/05/18', highest: 20, lowest: 15 },
  { date: '2021/05/19', highest: 23, lowest: 17 },
  { date: '2021/05/20', highest: 25, lowest: 16 },
  { date: '2021/05/21', highest: 21, lowest: 13 },
  { date: '2021/05/22', highest: 23, lowest: 11 },
  { date: '2021/05/13', highest: 22, lowest: 17 },
];

export const Default: FC = () => <LineGraph data={data} />;
