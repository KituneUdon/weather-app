import { FC } from 'react';

type Props = {
  label: string;
};

const Button: FC<Props> = ({ label }) => <button type="button">{label}</button>;

export default Button;
