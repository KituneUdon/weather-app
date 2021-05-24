import { FC, useEffect, useState } from 'react';

import WeatherForecastTemplate from '../templates/WeathreForecastTemplate';

import { Location } from '../../types/location';

const WeatherForecast: FC = () => {
  const [location, setLocation] = useState<Location>({
    latitude: null,
    longitude: null,
  });

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
    <WeatherForecastTemplate location={location} setLocation={setLocation} />
  );
};

export default WeatherForecast;
