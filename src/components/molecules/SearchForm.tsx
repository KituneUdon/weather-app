import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const container = css({
  display: 'flex',
});

const input = css({
  flexGrow: 1,
});

const SearchForm: FC = () => (
  <form css={container}>
    <Input emotionStyle={input} type="text" />
    <Button label="検索" />
  </form>
);

export default SearchForm;
