import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WeatherForecast from './components/pages/WeatherForecast';
import LicenseInformation from './components/pages/LicenseInformation';

const queryClient = new QueryClient();

const App: FC = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <WeatherForecast />
          </Route>
          <Route path="/license">
            <LicenseInformation />
          </Route>
        </Switch>
      </Router>
    </QueryClientProvider>
  </>
);

export default App;
