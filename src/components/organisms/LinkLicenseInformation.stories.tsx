import { FC } from 'react';
import { MemoryRouter } from 'react-router-dom';

import LinkLicenseInformation from './LinkLicenseInformation';

export default {
  component: LinkLicenseInformation,
  title: 'LinkLicenseInformation',
  decorators: [
    (story: () => JSX.Element): JSX.Element => (
      <MemoryRouter initialEntries={['/lincense']}>{story()}</MemoryRouter>
    ),
  ],
};

export const Default: FC = () => <LinkLicenseInformation />;
