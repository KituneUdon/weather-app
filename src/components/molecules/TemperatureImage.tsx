import { FC } from 'react';
import Img from '../atoms/Img';

import SunnyImage from '../../images/tenki_mark01_hare.png';
import RainImage from '../../images/tenki_mark02_ame.png';
import CloudyImage from '../../images/tenki_mark05_kumori.png';

type Weather = 'sunny' | 'rain' | 'cloudy';

type Props = {
  weather: Weather;
};

const switchWeatherImage = (weather: Weather) => {
  switch (weather) {
    case 'sunny':
      return <Img src={SunnyImage} alt="晴れ" />;
    case 'rain':
      return <Img src={RainImage} alt="雨" />;
    case 'cloudy':
      return <Img src={CloudyImage} alt="曇り" />;
    default:
      return <Img src={SunnyImage} alt="晴れ" />;
  }
};

const TemperatureImage: FC<Props> = ({ weather }) =>
  switchWeatherImage(weather);

export default TemperatureImage;
