import { FC } from 'react';
import Img from '../atoms/Img';

import { Weather } from '../../types/weather';

import volcanicAshImage from '../../images/kazanbai.png';
import smokeImage from '../../images/smoke_white4.png';
import sunakemuriImage from '../../images/sunakemuri.png';
import clearImage from '../../images/tenki_mark01_hare.png';
import rainImage from '../../images/tenki_mark02_ame.png';
import heavyRainImage from '../../images/tenki_mark03_gouu.png';
import cloudImage from '../../images/tenki_mark05_kumori.png';
import snowImage from '../../images/tenki_mark08_yuki.png';
import tornadeImage from '../../images/saigai_tatsumaki.png';
import arashiImage from '../../images/arashi.png';
import mistImage from '../../images/yama_kiri.png';

type Props = {
  weather: Weather;
};

const weatherIcon = {
  Thunderstorm: arashiImage,
  Drizzle: heavyRainImage,
  Rain: rainImage,
  Snow: snowImage,
  Mist: mistImage,
  Smoke: smokeImage,
  Haze: mistImage,
  Dust: sunakemuriImage,
  Fog: mistImage,
  Sand: tornadeImage,
  Ash: volcanicAshImage,
  Squall: rainImage,
  Tornado: tornadeImage,
  Clear: clearImage,
  Clouds: cloudImage,
};

const switchWeatherImage = (weather: Weather) => {
  // eslint-disable-next-line
  console.log(weather);

  return <Img src={weatherIcon[weather]} alt={weather} />;
};

const TemperatureImage: FC<Props> = ({ weather }) =>
  switchWeatherImage(weather);

export default TemperatureImage;
