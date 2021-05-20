import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '../atoms/Typography';

import TemperatureDisplay from '../molecules/TemperatureDisplay';
import TemperatureImage from '../molecules/TemperatureImage';

export type WeekdayWeatherForecastItemProps = {
  date: string;
  highestTemperature: number;
  lowestTemperature: number;
  weather: 'sunny' | 'rain' | 'cloudy';
};

const container = css({
  display: 'flex',
});

const item = css({
  flexGrow: 1,
});

const WeekdayWeatherForecastItem: FC<WeekdayWeatherForecastItemProps> = ({
  date,
  highestTemperature,
  lowestTemperature,
  // weather,
}) => (
  <div>
    <div>
      <Typography centering>{date}</Typography>
    </div>
    <div>
      <TemperatureImage weather="Rain" />
    </div>
    <div css={container}>
      <div css={item}>
        <TemperatureDisplay
          highestOrLowest="HIGHEST"
          temperature={highestTemperature}
        />
      </div>
      <div css={item}>
        <TemperatureDisplay
          highestOrLowest="LOWEST"
          temperature={lowestTemperature}
        />
      </div>
    </div>
  </div>
);

export default WeekdayWeatherForecastItem;
