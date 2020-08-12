import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';


import { helmet } from 'utils/helmet';

import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface AppLayoutProps {
  children: ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

// tslint:disable no-default-export
export default ({ children }: AppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />


    {children}
 
    {isDev && <Devtools />}
  </div>
);
