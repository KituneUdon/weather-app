import { FC, useContext } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Typography from '../atoms/Typography';
import RemoveButton from '../atoms/RemoveButton';

import { ErrorMessageContext } from '../../contexts/ErrorMessageContext';

const typographyStyle = css`
  display: flex;
  justify-content: space-between;
  background-color: #f0e0e0;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
`;

const ErrorMessage: FC = () => {
  const { errorMessage, setErrorMessage } = useContext(ErrorMessageContext);

  return (
    <>
      {errorMessage && (
        <div css={typographyStyle}>
          <Typography>{errorMessage}</Typography>
          <RemoveButton onClick={() => setErrorMessage('')} />
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
