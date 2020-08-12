import React from 'react'
import { Helmet } from 'react-helmet';
import SidebarNav from "../components/dashboard/SidebarNav"

import Dashboard from "../components/dashboard/Dashboard"



// tslint:disable no-default-export
export default () => (
    <>
        <Helmet title="Dashboard" />
        <Dashboard sidebar={<SidebarNav/>} content={"f"} />
    </>
);
