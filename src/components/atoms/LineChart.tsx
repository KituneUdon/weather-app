import { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export type Data = {
  time: string;
  temperature: number;
};

type Props = {
  data: Data[];
};

const LineGraph: FC<Props> = ({ data }) => (
  <ResponsiveContainer width="90%" height={500}>
    <LineChart width={400} height={400} data={data}>
      <XAxis dataKey="time" />
      <YAxis />
      <Line type="monotone" dataKey="temperature" stroke="#FF0000" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineGraph;
