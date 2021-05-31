import React, { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  color?: string;
  children?: React.ReactNode;
  centering?: boolean;
};

const Typography: FC<Props> = ({ color, children, centering }) => {
  const style = css`
    color: ${color};
  `;

  const textCenter =
    centering &&
    css`
      text-align: center;
    `;

  return <p css={[style, textCenter]}>{children}</p>;
};

export default Typography;
