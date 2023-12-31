import { FC, Fragment, PropsWithChildren } from 'react';

import { Navbar } from '../components/Navbar';

export const AppLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};
