import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Img from '../atoms/Img';

import TemperatureDisplay from '../molecules/TemperatureDisplay';

import SunnyImage from '../../images/tenki_mark01_hare.png';
import RainImage from '../../images/tenki_mark02_ame.png';
import CloudyImage from '../../images/tenki_mark05_kumori.png';
import Typography from '../atoms/Typography';

type Weather = 'sunny' | 'rain' | 'cloudy';

const container = css({
  display: 'flex',
});

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

const TodaysWeatherDisplay: FC = () => {
  const weather = 'sunny';

  return (
    <div css={container}>
      <div>{switchWeatherImage(weather)}</div>
      <div>
        <div>
          <TemperatureDisplay temperature={22} highestOrLowest="HIGHEST" />
          <Typography>最高気温</Typography>
        </div>
        <div>
          <TemperatureDisplay temperature={22} highestOrLowest="LOWEST" />
          <Typography>最低気温</Typography>
        </div>
      </div>
    </div>
  );
};

export default TodaysWeatherDisplay;
