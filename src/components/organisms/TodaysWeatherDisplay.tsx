import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '../atoms/Typography';

import TemperatureDisplay from '../molecules/TemperatureDisplay';
import TemperatureImage from '../molecules/TemperatureImage';

const container = css({
  display: 'flex',
});

const TodaysWeatherDisplay: FC = () => {
  const weather = 'sunny';

  return (
    <div css={container}>
      <div>
        <TemperatureImage weather={weather} />
      </div>
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
