/** @type {import('tailwindcss').Config} */
// Import NextUI plugin for Tailwind CSS integration
import { nextui } from "@nextui-org/react";

// Export Tailwind CSS configuration
export default {
  // Array of file paths to scan for CSS classes
  content: [
    // Main HTML file
    "./index.html",
    // All JavaScript/TypeScript files in src directory
    "./src/**/*.{js,ts,jsx,tsx}",
    // NextUI theme files
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // Theme customization
  theme: {
    // Extend default theme (currently empty)
    extend: {},
  },
  // Enable dark mode using class strategy
  darkMode: "class",
  // Array of Tailwind plugins
  plugins: [nextui()],
}

