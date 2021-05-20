import { FC } from 'react';
import Typography from '../atoms/Typography';

type Props = {
  temperature: number;
  highestOrLowest: 'HIGHEST' | 'LOWEST';
};

const TemperatureDisplay: FC<Props> = ({ temperature, highestOrLowest }) => {
  const foo = () => {
    switch (highestOrLowest) {
      case 'HIGHEST':
        return (
          <Typography color="red">▲ {Math.floor(temperature)}℃</Typography>
        );
      case 'LOWEST':
        return (
          <Typography color="blue">▼ {Math.floor(temperature)}℃</Typography>
        );
      default:
        return <Typography>引数が不正です</Typography>;
    }
  };

  return foo();
};

export default TemperatureDisplay;
