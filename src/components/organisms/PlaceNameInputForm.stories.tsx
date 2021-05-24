import { FC } from 'react';
import PlaceNameInputForm from './PlaceNameInputForm';

import { Location } from '../../types/location';

// ダミーのsetLocation
// locationを内部で参照していないため、ESLintでwarmingが出る
// ダミーの関数のため、eslintを無効化して対応
// eslint-disable-next-line
const setLocation = (location: Location) => ({});

export default {
  component: PlaceNameInputForm,
  title: 'organisms/PlaceNameInputForm',
};

export const Default: FC = () => (
  <PlaceNameInputForm setLocation={setLocation} />
);
