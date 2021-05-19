import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import WeatherForecast from './components/pages/WeatherForecast';

const queryClient = new QueryClient();

const App: FC = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <WeatherForecast />
    </QueryClientProvider>
  </>
);

export default App;
