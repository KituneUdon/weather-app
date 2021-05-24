import { FC } from 'react';
import axios from 'axios';

import SearchForm from '../molecules/SearchForm';

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
  };
};

const PlaceNameInputForm: FC<Props> = ({ setLocation }) => {
  const searchPlace = async (keyword: string) => {
    // eslint-disable-next-line
    console.log(`keyword : ${keyword}`);
    const response = await axios.get<Response>(
      encodeURI(
        `https://geoapi.heartrails.com/api/json?method=suggest&matching=like&keyword=${keyword}`,
      ),
    );

    if (response) {
      // eslint-disable-next-line
      console.log(
        `x : ${response.data.response.location[0].x}, y : ${response.data.response.location[0].y}`,
      );
      setLocation({
        latitude: Number(response.data.response.location[0].y),
        longitude: Number(response.data.response.location[0].x),
      });
    }

    return response;
  };

  return <SearchForm searchPlace={searchPlace} />;
};

export default PlaceNameInputForm;
