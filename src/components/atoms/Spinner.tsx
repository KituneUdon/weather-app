import { FC } from 'react';
import { SpinnerCircular } from 'spinners-react';

const Spinner: FC = () => (
  <SpinnerCircular
    size={90}
    thickness={100}
    speed={100}
    color="#36ad47"
    secondaryColor="rgba(0, 0, 0, 0.44)"
  />
);

export default Spinner;
