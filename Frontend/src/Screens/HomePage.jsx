// Import NextUI components for UI elements
import { Button, Divider } from "@nextui-org/react";
// Import React hooks for managing component state and side effects
import { useEffect } from "react";
// Import CoinCard component for displaying cryptocurrency information
// import CoinCard from "../components/CoinCard";
// Import custom hook to access Ethereum/Metamask functionality
import { useEthereum } from "../contexts/useEthereum";
// Import useSnackbar hook for displaying notifications
import { useSnackbar } from "notistack";
// Import FAQ component for frequently asked questions
import FAQ from "../components/FAQ";
// Import Footer component
// import Footer from "../components/Footer";
// Import ReachUs component for contact information
import ReachUs from "../components/ReachUs";
// Import custom cursor styles
import "../cursor"
// Import ParticlesBg component for animated background
import ParticlesBg from "../components/ParticlesBg";

// Function to open Metamask download page
const MetamaskExtension = () => {
  window.open("https://metamask.io/download/", "_blank");
};

// Main homepage component
function HomePage() {
  // Get all Ethereum-related state and functions from context
  const { 
    isEthereumUndefined, 
    isConnected, 
    account, 
    balance, 
    isConnecting,
    connectWallet 
  } = useEthereum();
  
  // Get snackbar function for displaying notifications
  const { enqueueSnackbar } = useSnackbar();

  // Effect to check if Metamask is installed and show appropriate messages
  useEffect(() => {
    // Delay the check to allow page to load
    setTimeout(async () => {
      // Check if ethereum object exists in window (Metamask installed)
      if (isEthereumUndefined) {
        // Show warning if Metamask is not installed
        enqueueSnackbar('Seems Like You dont have Metamask?', { variant: 'warning' });
        // Show info message to install wallet
        enqueueSnackbar('Install A wallet extension (Metamask)', { variant: 'info' });
      }
    }, 2000);
  }, [isEthereumUndefined, enqueueSnackbar]);

  // Function to handle wallet connection with proper error handling
  const handleConnectWallet = async () => {
    try {
      // Show notification that wallet connection is being requested
      enqueueSnackbar("Requesting wallet connection...", { variant: "info" });
      
      // Use the connectWallet function from context
      await connectWallet();
      
      // Show success message with the account being used
      enqueueSnackbar(`Connected to ${account}`, { variant: "success" });
    } catch (err) {
      // Show appropriate error messages based on the error
      if (err.message === "No Ethereum provider found") {
        enqueueSnackbar("Install A wallet.", { variant: "error" });
      } else if (err.message === "No accounts selected") {
        enqueueSnackbar("No accounts selected.", { variant: "warning" });
      } else if (err.message.includes("User rejected")) {
        enqueueSnackbar("Wallet connection was denied", { variant: "error" });
      } else {
        enqueueSnackbar("Failed to connect wallet", { variant: "error" });
      }
    }
  };

  // Return the JSX structure for the homepage
  return (
    // React Fragment to group multiple elements
    <>
      {/* Scroll indicator component */}
      {/* Main container with blur background effect */}
      <div className="relative blur-bg bg-black/30">
        {/* Hero section with responsive layout */}
        <div className="relative min-h-[100vh] -mt-[36px] md:-mt-[72px] text-white z-[8] flex flex-col md:flex-row flex-wrap justify-around items-center">
          {/* Animated particles background */}
          <ParticlesBg className="bg-black/80 absolute top-0 left-0 z-1 pointer-events-none" />
          {/* Left side content with title and buttons */}
          <div className="z-[4] flex flex-col gap-4">
            {/* Main title */}
            <div className="font-bold text-5xl pt-[75px]">CryptoMart</div>
            {/* Subtitle */}
            <div className="mx-2">
              <p>Discover A New World of Shopping</p>
            </div>
            {/* Button container with wallet connection */}
            <div className="flex flex-row items-center justify-center mt-10">
              {/* Shop Now button that links to products page */}
              <Button
                as="a"
                href="/Products"
                variant="solid"
                color="primary"
                className="m-auto flex items-center justify-center hover:text-white"
              >
                {" "}
                Shop Now
              </Button>

              {/* Show Metamask Extension button when ethereum is undefined */}
              {isEthereumUndefined && (
                <Button
                  variant="solid"
                  color="primary"
                  className="inline-block m-auto"
                  onClick={MetamaskExtension}
                >
                  {" "}
                  Install Metamask
                </Button>
              )}
              
              {/* Show Connect Wallet button when ethereum is available but not connected */}
              {!isEthereumUndefined && !isConnected && (
                <Button
                  variant="solid"
                  color="primary"
                  className="inline-block m-auto"
                  onClick={handleConnectWallet}
                  disabled={isConnecting}
                >
                  {" "}
                  {isConnecting ? "Connecting..." : "Connect Your Wallet"}
                </Button>
              )}
              
              {/* Display balance and account info when wallet is connected */}
              {isConnected && balance && (
                <div className="m-auto ml-10 flex gap-4 items-center">
                  {/* Ethereum icon */}
                  <img src="/ethereum-svgrepo-com.svg" className="w-[25px]" alt="Ethereum" />
                  {/* Balance text */}
                  <p className="font-semibold">{balance}</p>
                  {/* Account address (shortened) */}
                  <p className="text-sm opacity-80">
                    {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : ''}
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* Right side image container */}
          <div className="z-[4] w-full md:w-auto px-4">
            {/* Shopping app illustration */}
            <img
              className="md:max-w-[550px] w-full max-w-[400px] mx-auto"
              src="/undraw_shopping_app_flsj (1).svg"
              alt="Shopping App"
            />
          </div>
          {/* Scroll down button with animation */}
          <div
            onClick={() => {
              // Smooth scroll down by one viewport height minus navbar height
              window.scrollBy({ top: innerHeight - 72, behavior: 'smooth' });
            }}
            className="z-[4] cursor-pointer scroll-down-anim rounded-full absolute bottom-10 left-[50%]"
          >
            {/* Growing animation element */}
            <div className="grow-animation"></div>
            {/* Down arrow image */}
            <img className="h-[50px]" src="/down-arrow.png" alt="Scroll Down" />
          </div>
        </div>

        {/* FAQ section */}
        <div className="text-white w-full flex flex-col">
          {/* FAQ container with responsive width */}
          <div className="mx-auto md:max-w-[900px] w-full px-8 mb-9">
            {/* FAQ section title */}
            <div className="text-center text-3xl my-5 py-auto">
              Frequently Asked Questions
            </div>
            {/* FAQ component */}
            <FAQ />
          </div>
        </div>

        {/* Divider line */}
        <Divider className="max-w-[800px] w-full mx-auto" />
        {/* Testimonial section */}

        {/* Customer testimonial quote */}
        <figure className="max-w-screen-md mx-auto text-center py-10 mt-5 mb-10">
          {/* Quote icon */}
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            {/* Quote icon path */}
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          {/* Testimonial quote */}
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">&quot;Cryptomart&apos;s commitment to continuous improvement is evident in the regular updates and enhancements to the platform. It&apos;s refreshing to see a company that listens to its users and strives to make the shopping experience better for everyone.&quot;</p>
          </blockquote>
          {/* Testimonial author information */}
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            {/* Author profile picture */}
            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            {/* Author name and role */}
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael R.</cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Customer</cite>
            </div>
          </figcaption>
        </figure>

        {/* Commented out testimonial section */}
        {/* <div>
          <div className="flex flex-col">
            <div className="text-3xl text-white text-center mt-20">
              <h1>
                The BEST site I can shop anonymously .
              </h1>
            </div>
            <div className="mt-10 mx-auto">
              <img
                className="rounded-full mx-auto w-[125px]"
                src="https://avatars.githubusercontent.com/u/31966594?v=4"
              />
              <p className="text-white mt-4">Prashanth Kumar</p>
              <p className="text-xs text-white text-center mb-10">
                Loop Sr. Executive
              </p>
            </div>
          </div>
        </div> */}
        {/* Another divider line */}
        <Divider className="w-full max-w-[800px] mx-auto" />
        {/* Contact us section */}
        <ReachUs />
        {/* Footer section */}
      </div>
    </>
  );
}

// Export the HomePage component as the default export
export default HomePage;
