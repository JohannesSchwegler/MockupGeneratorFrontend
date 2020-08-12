import React from 'react'
import { Helmet } from 'react-helmet';

import Login from "../pageComponents/login/Login"

// tslint:disable no-default-export
export default () => (
    <>
        <Helmet title="Dashboard" />
        <Login />
    </>
);
