import { FC } from 'react';
import SearchForm from './SearchForm';

// ダミーのsearchPlace
// locationを内部で参照していないため、ESLintでwarmingが出る
// ダミーの関数のため、eslintを無効化して対応
// eslint-disable-next-line
const searchPlace = (keyword: string) => ({});

export default {
  component: SearchForm,
  title: 'molecules/SearchForm',
};

export const Default: FC = () => <SearchForm searchPlace={searchPlace} />;
