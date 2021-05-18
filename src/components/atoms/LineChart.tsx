import { FC } from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

export type Data = {
  time: string;
  temperature: number;
};

type Props = {
  data: Data[];
};

const LineGraph: FC<Props> = ({ data }) => (
  <LineChart width={500} height={500} data={data}>
    <XAxis dataKey="time" />
    <YAxis />
    <Line type="monotone" dataKey="temperature" stroke="#FF0000" />
  </LineChart>
);

export default LineGraph;
