import { FC } from 'react';

import LineChart from '../atoms/LineChart';
import Typography from '../atoms/Typography';

const TempratureLineChart: FC = () => {
  // APIからデータを取得する
  // 今は仮のデータをベタ書き
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

  return (
    <>
      <Typography>1日の気温変化</Typography>
      <LineChart data={data} />
    </>
  );
};

export default TempratureLineChart;
