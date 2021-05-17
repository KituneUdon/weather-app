import { FC } from 'react';
import { SerializedStyles } from '@emotion/react';

export type Props = JSX.IntrinsicElements['input'] & {
  emotionStyle?: SerializedStyles;
};

const Input: FC<Props> = (props) => {
  const { type, emotionStyle } = props;

  return <input css={emotionStyle} type={type} />;
};

export default Input;
