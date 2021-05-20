import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PlaceNameInputForm from '../organisms/PlaceNameInputForm';
import CurrentLocation from '../organisms/CurrentLocation';
import TemperatureLineChart from '../organisms/TemperatureLineChart';
import TodaysWeatherDisplay from '../organisms/TodaysWeatherDisplay';
import WeekdayWeatherForecast from '../organisms/WeekdayWeatherForecast';

import { Location } from '../../types/location';

type Props = {
  location: Location;
};

const container = css({
  display: 'flex',
});

const fullWidth = css({
  width: '100%',
});

const WeathreForecastTemplate: FC<Props> = ({ location }) => (
  <>
    <div css={fullWidth}>
      <PlaceNameInputForm css={fullWidth} />
    </div>
    <div>
      <CurrentLocation css={fullWidth} location={location} />
    </div>
    <div css={[container, fullWidth]}>
      <div>
        <TodaysWeatherDisplay location={location} />
      </div>
      <div>
        <TemperatureLineChart />
      </div>
    </div>
    <div>
      <WeekdayWeatherForecast />
    </div>
  </>
);

export default WeathreForecastTemplate;
