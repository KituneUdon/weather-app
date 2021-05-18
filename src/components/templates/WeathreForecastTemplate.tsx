import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PlaceNameInputForm from '../organisms/PlaceNameInputForm';
import CurrentLocation from '../organisms/CurrentLocation';

const fullWidth = css({
  width: '100%',
});

const WeathreForecastTemplate: FC = () => (
  <>
    <div css={fullWidth}>
      <PlaceNameInputForm css={fullWidth} />
    </div>
    <div css={fullWidth}>
      <CurrentLocation css={fullWidth} />
    </div>
  </>
);

export default WeathreForecastTemplate;
