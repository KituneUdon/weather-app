import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import removeIcon from '../../images/remove-icon.png';

type Props = JSX.IntrinsicElements['button'];

const buttonStyle = css`
  padding: 0;
  border: none;
  background: transparent;
`;

const RemoveButton: FC<Props> = ({ onClick }) => (
  <button type="button" css={buttonStyle} onClick={onClick}>
    <img src={removeIcon} alt="削除ボタン" width="20px" />
  </button>
);

export default RemoveButton;
