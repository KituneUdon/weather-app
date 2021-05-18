import React, { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  color?: string;
  children?: React.ReactNode;
};

const Typography: FC<Props> = ({ color, children }) => {
  const style = css`
    color: ${color};
  `;

  return <p css={style}>{children}</p>;
};

export default Typography;
