import { FC } from 'react';

export type Props = {
  label: string;
};

const Button: FC<Props> = ({ label }) => <button type="submit">{label}</button>;

export default Button;
