import { FC } from 'react';

type Props = {
  src: string;
  alt: string;
};

const Img: FC<Props> = ({ src, alt }) => <img src={src} alt={alt} />;

export default Img;
