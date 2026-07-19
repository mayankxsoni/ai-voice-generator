'use client';

import { useAppContext } from '@/context/AppContext';
import { Fragment } from 'react';
import Navbar from './navbar/Navbar';
import TopNavHeading from './TopNavHeading';

const HeaderWrapper = () => {
  const { showTopNavMarquee } = useAppContext();

  return (
    <Fragment>
      <TopNavHeading />
      <Navbar showTopNav={showTopNavMarquee} />
    </Fragment>
  );
};

HeaderWrapper.displayName = 'HeaderWrapper';
export default HeaderWrapper;
