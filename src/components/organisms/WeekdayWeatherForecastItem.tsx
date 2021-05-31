import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '../atoms/Typography';

import TemperatureDisplay from '../molecules/TemperatureDisplay';
import TemperatureImage from '../molecules/TemperatureImage';

import { Weather } from '../../types/weather';

export type WeekdayWeatherForecastItemProps = {
  date: string;
  highestTemperature: number;
  lowestTemperature: number;
  weather: Weather;
};

const container = css`
  min-width: 126px;
`;

const flexBox = css`
  display: flex;
`;

const item = css`
  flex-grow: 1;
`;

const WeekdayWeatherForecastItem: FC<WeekdayWeatherForecastItemProps> = ({
  date,
  highestTemperature,
  lowestTemperature,
}) => (
  <div css={container}>
    <div>
      <Typography centering>{date}</Typography>
    </div>
    <div>
      <TemperatureImage weather="Rain" />
    </div>
    <div css={flexBox}>
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
