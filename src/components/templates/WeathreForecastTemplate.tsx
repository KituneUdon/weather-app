import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import PlaceNameInputForm from '../organisms/PlaceNameInputForm';

const fullWidth = css({
  width: '100%',
});

const WeathreForecastTemplate: FC = () => (
  <>
    <div css={fullWidth}>
      <PlaceNameInputForm css={fullWidth} />
    </div>
  </>
);

export default WeathreForecastTemplate;
