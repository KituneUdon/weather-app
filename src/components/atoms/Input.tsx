import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';

export type Props = JSX.IntrinsicElements['input'] & {
  emotionStyle?: SerializedStyles;
};

const Input: FC<Props> = (props) => {
  const { type, emotionStyle, onChange, value, id, placeholder } = props;

  return (
    <input
      id={id}
      css={emotionStyle}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
