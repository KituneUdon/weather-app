import { FC } from 'react';
import { SerializedStyles } from '@emotion/react';

export type Props = JSX.IntrinsicElements['input'] & {
  emotionStyle?: SerializedStyles;
};

const Input: FC<Props> = (props) => {
  const { type, emotionStyle, onChange, value, id } = props;

  return (
    <input
      id={id}
      css={emotionStyle}
      type={type}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
