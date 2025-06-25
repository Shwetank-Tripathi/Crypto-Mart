// Import Button component from NextUI for UI elements
import { Button } from "@nextui-org/button";
// Import Popover, and PopoverContent components from NextUI
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

// Navigation bar component that appears at the top of all pages
function NavBar() {
  // Return the JSX structure for the navigation bar
  return (
    // Main navigation container with styling for glassmorphism effect
    <nav className="z-10 w-full sticky top-0 left-0 bg-black/70 shadow-xl shadow-black/50 backdrop-blur-md">
      {/* Container for navigation content with responsive layout */}
      <div className="max-w-screen-xl flex flex-wrap gap-4 items-center justify-between  p-4">
        {/* Logo and brand name section */}
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* Blockchain logo image */}
          <img
            src="/blockchain.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          {/* Brand name text */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CryptoMart
          </span>
        </a>
        {/* Desktop navigation menu - hidden on mobile */}
        <div
          className="ml-6 mr-auto items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-xs"
          id="navbar-user"
        >
          {/* Navigation links list */}
          <ul className="flex flex-col md:gap-8 md:p-0 mt-4 md:space-x-4 md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            {/* Home navigation link */}
            <li>
              <a
                href="/"
                className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            {/* Products navigation link */}
            <li>
              <a
                href="/Products"
                className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </a>
            </li>
            {/* About us navigation link */}
            <li>
              <a
                href="/About"
                className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About us
              </a>
            </li>
            {/* Premium navigation link */}
            <li>
              <a
                href="#"
                className="premium-button block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Premium
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile navigation menu - visible only on mobile devices */}
        <div className="md:hidden">
          {/* Popover component for mobile menu */}
          <Popover placement="bottom" showArrow offset={10}>
            {/* Trigger button for the mobile menu */}
            <PopoverTrigger>
              <Button className="bg-transparent p-2" isIconOnly>
                {/* Menu icon image */}
                <img className="w-full" src="/menu.png" />
              </Button>
            </PopoverTrigger>
            {/* Popover content containing mobile navigation links */}
            <PopoverContent className="w-[240px]">
              {/* Function that receives title props and returns the content */}
              {() => (
                // Container for mobile menu items
                <div className="px-1 py-2 w-full">
                  {/* Flex container for mobile navigation buttons */}
                  <div className="mt-2 flex flex-col gap-2 w-full">
                    {/* Home button for mobile */}
                    <Button size="sm" variant="bordered" as="a" href="/">Home</Button>
                    {/* Products button for mobile */}
                    <Button size="sm" variant="bordered" as="a" href="/Products">Products</Button>
                    {/* About Us button for mobile */}
                    <Button size="sm" variant="bordered" as="a" href="/About">About Us</Button>
                    {/* Premium button for mobile with special styling */}
                    <Button size="sm" className="premium-button" >Premium</Button>
                  </div>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </div>

      </div>
    </nav>
  );
}

// Export the NavBar component as the default export
export default NavBar;
