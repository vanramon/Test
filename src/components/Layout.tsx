import { FC, Fragment, PropsWithChildren } from 'react';
import { Navbar } from './Navbar';

export const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};
