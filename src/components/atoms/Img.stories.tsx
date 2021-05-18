import { FC } from 'react';
import Img from './Img';

import SunnyImg from '../../images/tenki_mark01_hare.png';

export default {
  component: Img,
  title: 'Img',
};

export const Default: FC = () => <Img src={SunnyImg} alt="晴れ" />;
