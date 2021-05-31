import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Spinner from '../atoms/Spinner';

const style = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading: FC = () => (
  <div css={style}>
    <Spinner />
  </div>
);

export default Loading;
