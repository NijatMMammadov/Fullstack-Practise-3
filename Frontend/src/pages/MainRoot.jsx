import React from 'react'
import { Outlet } from 'react-router'
import Navbarr from "../components/Navbarr"
import Footerr from "../components/Footerr"

function MainRoot() {
    return (
        <>
            <Navbarr></Navbarr>
            <Outlet />
            <Footerr></Footerr>
        </>
    )
}

export default MainRoot
