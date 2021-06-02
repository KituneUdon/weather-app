import { FC, useContext } from 'react';
import axios from 'axios';

import SearchForm from '../molecules/SearchForm';

import { ErrorMessageContext } from '../../contexts/ErrorMessageContext';

import { Location } from '../../types/location';

type Props = {
  setLocation: (location: Location) => void;
};

type Response = {
  response: {
    location: [
      {
        city: string;
        // eslint-disable-next-line
        city_kana: string;
        town: string;
        // eslint-disable-next-line
        town_kana: string;
        x: string;
        y: string;
        prefecture: string;
        postal: string;
      },
    ];
    error?: string;
  };
};

const PlaceNameInputForm: FC<Props> = ({ setLocation }) => {
  const { setErrorMessage } = useContext(ErrorMessageContext);

  const searchPlace = async (keyword: string) => {
    const response = await axios.get<Response>(
      encodeURI(
        `https://geoapi.heartrails.com/api/json?method=suggest&matching=like&keyword=${keyword}`,
      ),
    );

    if (response && response.data.response.error === undefined) {
      setLocation({
        latitude: Number(response.data.response.location[0].y),
        longitude: Number(response.data.response.location[0].x),
      });
      setErrorMessage('');
    } else {
      setErrorMessage('地名が見つかりませんでした');
    }

    return response;
  };

  return <SearchForm searchPlace={searchPlace} />;
};

export default PlaceNameInputForm;
