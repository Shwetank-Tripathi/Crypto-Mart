// Import React hooks for managing component state and side effects
import { useEffect } from 'react'
// Import React Router components for client-side routing
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// Import the HomePage component for the main landing page
import HomePage from './Screens/HomePage'
// Import the AboutPage component for the about section
import AboutPage from './Screens/AboutPage'
// Import the Layout component that wraps all pages
import Layout from './Layout'
// Import the ProductPage component for displaying products
import ProductPage from './Screens/ProductPage'
// Import the custom cursor initialization function
import { initCursor } from './cursor'

// Main App component that sets up routing and layout
function App() {
  // Initialize custom cursor effect when component mounts
  useEffect(initCursor, []);

  // Return the JSX structure for the application
  return (
    // BrowserRouter provides routing functionality for the entire app
    <BrowserRouter>
      {/* Routes component defines all the possible routes in the application */}
      <Routes>
        {/* Main layout route that wraps all other routes */}
        <Route path="/" element={<Layout />}>
          {/* Index route for the home page */}
          <Route index element={<HomePage />} />
          {/* Route for the about page */}
          <Route path="/About" element={<AboutPage />} />
          {/* Route for the products page */}
          <Route path="/Products" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// Export the App component as the default export
export default App