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

  useEffect(() => {
    // eslint-disable-next-line
    console.log(location);
  }, [location]);

  return <WeatherForecastTemplate location={location} />;
};

export default WeatherForecast;
