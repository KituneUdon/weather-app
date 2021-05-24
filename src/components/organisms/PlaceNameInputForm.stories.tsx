import { FC } from 'react';
import PlaceNameInputForm from './PlaceNameInputForm';

import { Location } from '../../types/location';

// ダミーのsetLocation
const setLocation = (location: Location) => {
  // eslint-disable-next-line
  console.log(location);

  return {};
};

export default {
  component: PlaceNameInputForm,
  title: 'PlaceNameInputForm',
};

export const Default: FC = () => (
  <PlaceNameInputForm setLocation={setLocation} />
);
