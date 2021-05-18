import { FC } from 'react';
import { LineChart, Line } from 'recharts';

export type Data = {
  date: string;
  highest: number;
  lowest: number;
};

type Props = {
  data: Data[];
};

const LineGraph: FC<Props> = ({ data }) => (
  <LineChart width={400} height={400} data={data}>
    <Line type="monotone" dataKey="highest" stroke="#FF0000" />
    <Line type="monotone" dataKey="lowest" stroke="#0000FF" />
  </LineChart>
);

export default LineGraph;
