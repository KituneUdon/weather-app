import { FC } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useFormik } from 'formik';

import Input from '../atoms/Input';
import Submit from '../atoms/Submit';

type Props = {
  searchPlace: (keyword: string) => void;
};

const container = css({
  display: 'flex',
});

const input = css({
  flexGrow: 1,
});

const SearchForm: FC<Props> = ({ searchPlace }) => {
  const formik = useFormik({
    initialValues: {
      place: '',
    },
    onSubmit: (values) => {
      searchPlace(values.place);
    },
  });

  return (
    <form css={container} onSubmit={formik.handleSubmit}>
      <Input
        id="place"
        emotionStyle={input}
        type="text"
        onChange={formik.handleChange}
        value={formik.values.place}
      />
      <Submit label="検索" />
    </form>
  );
};

export default SearchForm;
