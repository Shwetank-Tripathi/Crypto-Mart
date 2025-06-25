// Import defineConfig function from Vite for type-safe configuration
import { defineConfig } from 'vite'
// Import React plugin for SWC compiler (faster than Babel)
import react from '@vitejs/plugin-react-swc'

// Vite configuration object
// https://vitejs.dev/config/
export default defineConfig({
  // Array of plugins to use in the build process
  plugins: [react()],
})
