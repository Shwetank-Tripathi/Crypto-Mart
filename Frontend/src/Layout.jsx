// Import Outlet from React Router to render nested routes
import { Outlet } from 'react-router-dom'
// Import the NavBar component for navigation
import NavBar from './components/NavBar'
// Import the Footer component for the page footer
import Footer from './components/Footer'
// Import the ScrollIndecator component to show scroll progress
import ScrollIndecator from './components/ScrollIndecator'

// Layout component that provides the common structure for all pages
function Layout() {
    // Return the JSX structure with navigation, content area, and footer
    return (
        // React Fragment to group multiple elements without adding extra DOM nodes
        <>
            <ScrollIndecator />
            {/* Navigation bar component */}
            <NavBar />
            {/* Outlet renders the child routes (HomePage, AboutPage, ProductPage) */}
            <Outlet />
            {/* Footer component */}
            <Footer />
        </>
    )
}

// Export the Layout component as the default export
export default Layout