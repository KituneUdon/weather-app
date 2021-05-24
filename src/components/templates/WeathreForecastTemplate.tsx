import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PlaceNameInputForm from '../organisms/PlaceNameInputForm';
import CurrentLocation from '../organisms/CurrentLocation';
import TemperatureLineChart from '../organisms/TemperatureLineChart';
import TodaysWeatherDisplay from '../organisms/TodaysWeatherDisplay';
import WeekdayWeatherForecast from '../organisms/WeekdayWeatherForecast';
import LinkLicenseInformation from '../organisms/LinkLicenseInformation';

import { Location } from '../../types/location';

type Props = {
  location: Location;
  setLocation: (location: Location) => void;
};

const container = css({
  display: 'flex',
});

const containerItem = css({
  flexGrow: 1,
});

const fullWidth = css({
  width: '100%',
});

const footer = css({
  textAlign: 'center',
});

const WeathreForecastTemplate: FC<Props> = ({ setLocation, location }) => (
  <div>
    <div css={fullWidth}>
      <PlaceNameInputForm css={fullWidth} setLocation={setLocation} />
    </div>
    <div>
      <CurrentLocation css={fullWidth} location={location} />
    </div>
    <div css={[container, fullWidth]}>
      <div css={containerItem}>
        <TodaysWeatherDisplay location={location} />
      </div>
      <div css={containerItem}>
        <TemperatureLineChart location={location} />
      </div>
    </div>
    <div>
      <WeekdayWeatherForecast location={location} />
    </div>
    <hr />
    <footer css={footer}>
      <LinkLicenseInformation />
    </footer>
  </div>
);

export default WeathreForecastTemplate;
