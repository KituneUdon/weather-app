import { FC, useContext } from 'react';

import {
  ErrorMessageProvider,
  ErrorMessageContext,
} from '../../contexts/ErrorMessageContext';

import ErrorMessage from './ErrorMessage';

type Props = {
  storyFn: () => JSX.Element;
};

const Story: FC<Props> = ({ storyFn }) => storyFn();

const myDecorator = (storyFn: () => JSX.Element) => (
  <ErrorMessageProvider>
    <Story storyFn={storyFn} />
  </ErrorMessageProvider>
);

export default {
  component: ErrorMessage,
  title: 'organisms/ErrorMessage',
  decorators: [(story: () => JSX.Element): JSX.Element => myDecorator(story)],
};

export const Default: FC = () => {
  const { setErrorMessage } = useContext(ErrorMessageContext);

  setErrorMessage('エラーが発生しました');

  return <ErrorMessage />;
};
