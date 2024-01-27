import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
// import About from './components/About/About'
function Layout() {
    return (
        <>
            < Header />
            {/* < About /> */}
            < Outlet />
            < Footer />
        </>
    )
}

export default Layout