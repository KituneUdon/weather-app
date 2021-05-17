import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';

type Props = JSX.IntrinsicElements['input'] & {
  emotionStyle?: SerializedStyles;
};

const Input: FC<Props> = (props) => {
  const { type, emotionStyle } = props;

  return <input css={emotionStyle} type={type} />;
};

export default Input;
