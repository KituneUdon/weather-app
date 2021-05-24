import { FC } from 'react';
import SearchForm from './SearchForm';

// ダミーのsearchPlace
const searchPlace = (keyword: string) => {
  // eslint-disable-next-line
  console.log(keyword);

  return {};
};

export default {
  component: SearchForm,
  title: 'SearchForm',
};

export const Default: FC = () => <SearchForm searchPlace={searchPlace} />;
