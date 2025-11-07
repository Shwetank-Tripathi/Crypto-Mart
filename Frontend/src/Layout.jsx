import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollIndecator from './components/ScrollIndecator'

function Layout() {
    return (
        <>
            <ScrollIndecator />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
