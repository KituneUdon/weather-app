import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

type Props = {
  src: string;
  alt: string;
};

const style = css({
  maxWidth: '100%',
});

const Img: FC<Props> = ({ src, alt }) => (
  <img css={style} src={src} alt={alt} />
);

export default Img;
