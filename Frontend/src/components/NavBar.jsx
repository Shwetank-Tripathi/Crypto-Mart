import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

function NavBar() {
  return (
    <nav className="z-10 w-full sticky top-0 left-0 bg-black/70 shadow-xl shadow-black/50 backdrop-blur-md">
      <div className="max-w-screen-xl flex flex-wrap gap-4 items-center justify-between  p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/blockchain.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CryptoMart
          </span>
        </a>
        <div
          className="ml-6 mr-auto items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-xs"
          id="navbar-user"
        >
          <ul className="flex flex-col md:gap-8 md:p-0 mt-4 md:space-x-4 md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Products"
                className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="block py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About us
              </a>
            </li>
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

        <div className="md:hidden">
          <Popover placement="bottom" showArrow offset={10}>
            <PopoverTrigger>
              <Button className="bg-transparent p-2" isIconOnly>
                <img className="w-full" src="/menu.png" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px]">
              {() => (
                <div className="px-1 py-2 w-full">
                  <div className="mt-2 flex flex-col gap-2 w-full">
                    <Button size="sm" variant="bordered" as="a" href="/">Home</Button>
                    <Button size="sm" variant="bordered" as="a" href="/Products">Products</Button>
                    <Button size="sm" variant="bordered" as="a" href="/About">About Us</Button>
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

export default NavBar;
