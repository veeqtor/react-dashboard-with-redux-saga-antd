/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Routes from '../../routes';

interface IViewsProps {
  location: Record<string, any>;
}

const Views = (props: IViewsProps): React.ReactElement<{}> => {
  return (
    <>
      <Routes />
    </>
  );
};

export default Views;
