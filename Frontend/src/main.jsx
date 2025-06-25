// Import React library for building user interfaces
import React from 'react'
// Import NextUI provider for UI component theming and configuration
import { NextUIProvider } from "@nextui-org/react";
// Import ReactDOM for rendering React components to the DOM
import ReactDOM from 'react-dom/client'
// Import the main App component
import App from './App.jsx'
// Import global CSS styles
import './index.css'
// Import MetamaskProvider context for blockchain wallet integration
import { MetamaskProvider } from './contexts/MetamaskProvider.jsx';
// Import SnackbarProvider for displaying notifications
import { SnackbarProvider } from 'notistack';

// Create a React root and render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Enable React Strict Mode for additional development checks
  <React.StrictMode>
    {/* Wrap the app with MetamaskProvider for blockchain functionality */}
    <MetamaskProvider>
      {/* Wrap with NextUIProvider for UI component theming */}
      <NextUIProvider>
        {/* Wrap with SnackbarProvider for notification system */}
        <SnackbarProvider>
          {/* Render the main App component */}
          <App />
        </SnackbarProvider>
      </NextUIProvider>
    </MetamaskProvider>
  </React.StrictMode>,
)
