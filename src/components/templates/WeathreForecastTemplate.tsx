import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PlaceNameInputForm from '../organisms/PlaceNameInputForm';
import CurrentLocation from '../organisms/CurrentLocation';
import TemperatureLineChart from '../organisms/TemperatureLineChart';
import TodaysWeatherDisplay from '../organisms/TodaysWeatherDisplay';

const container = css({
  display: 'flex',
});

const fullWidth = css({
  width: '100%',
});

const WeathreForecastTemplate: FC = () => (
  <>
    <div css={fullWidth}>
      <PlaceNameInputForm css={fullWidth} />
    </div>
    <div>
      <CurrentLocation css={fullWidth} />
    </div>
    <div css={[container, fullWidth]}>
      <div>
        <TodaysWeatherDisplay />
      </div>
      <div>
        <TemperatureLineChart />
      </div>
    </div>
  </>
);

export default WeathreForecastTemplate;
