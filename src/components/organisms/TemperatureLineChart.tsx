import { FC } from 'react';

import LineChart from '../atoms/LineChart';
import Typography from '../atoms/Typography';

const TempratureLineChart: FC = () => {
  // APIからデータを取得する
  // 今は仮のデータをベタ書き
  const data = [
    { date: '2021/05/18', highest: 20, lowest: 15 },
    { date: '2021/05/19', highest: 23, lowest: 17 },
    { date: '2021/05/20', highest: 25, lowest: 16 },
    { date: '2021/05/21', highest: 21, lowest: 13 },
    { date: '2021/05/22', highest: 23, lowest: 11 },
    { date: '2021/05/13', highest: 22, lowest: 17 },
  ];

  return (
    <>
      <Typography>1週間の気温変化</Typography>
      <LineChart data={data} />
    </>
  );
};

export default TempratureLineChart;
