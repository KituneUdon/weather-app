import { FC, useEffect, useState, useContext } from 'react';

import WeatherForecastTemplate from '../templates/WeathreForecastTemplate';
import { ErrorMessageContext } from '../../contexts/ErrorMessageContext';

import { Location } from '../../types/location';

const WeatherForecast: FC = () => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });

  const { errorMessage } = useContext(ErrorMessageContext);

  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((pos) =>
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        }),
      ),
    [],
  );

  return (
    <WeatherForecastTemplate
      location={location}
      setLocation={setLocation}
      errorMessage={errorMessage}
    />
  );
};

export default WeatherForecast;
