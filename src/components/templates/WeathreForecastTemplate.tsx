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

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 1000px;
  margin: 10px auto;
`;

const fullWidth = css`
  grid-column: 1 / 3;
`;

const footer = css`
  border-top: 1px solid #000;
  text-align: center;
  padding: 10px 0;
`;

const WeathreForecastTemplate: FC<Props> = ({ setLocation, location }) => (
  <div css={container}>
    <div css={fullWidth}>
      <PlaceNameInputForm setLocation={setLocation} />
    </div>
    <div css={fullWidth}>
      <CurrentLocation location={location} />
    </div>
    <div>
      <TodaysWeatherDisplay location={location} />
    </div>
    <div>
      <TemperatureLineChart location={location} />
    </div>
    <div css={fullWidth}>
      <WeekdayWeatherForecast location={location} />
    </div>
    <footer css={[fullWidth, footer]}>
      <LinkLicenseInformation />
    </footer>
  </div>
);

export default WeathreForecastTemplate;
