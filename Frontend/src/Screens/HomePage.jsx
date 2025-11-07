import { Button, Divider } from "@nextui-org/react";
import { useEffect } from "react";
import { useEthereum } from "../contexts/useEthereum";
import { useSnackbar } from "notistack";
import FAQ from "../components/FAQ";
import ReachUs from "../components/ReachUs";
import "../cursor"
import ParticlesBg from "../components/ParticlesBg";

const MetamaskExtension = () => {
  window.open("https://metamask.io/download/", "_blank");
};

function HomePage() {
  const { 
    isEthereumUndefined, 
    isConnected, 
    account, 
    balance, 
    isConnecting,
    connectWallet 
  } = useEthereum();
  
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setTimeout(async () => {
      if (isEthereumUndefined) {
        enqueueSnackbar('Seems Like You dont have Metamask?', { variant: 'warning' });
        enqueueSnackbar('Install A wallet extension (Metamask)', { variant: 'info' });
      }
    }, 2000);
  }, [isEthereumUndefined, enqueueSnackbar]);

  const handleConnectWallet = async () => {
    try {
      enqueueSnackbar("Requesting wallet connection...", { variant: "info" });
      
      await connectWallet();
      
      enqueueSnackbar(`Connected to ${account}`, { variant: "success" });
    } catch (err) {
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

  return (
    <>
      <div className="relative blur-bg bg-black/30">
        <div className="relative min-h-[100vh] -mt-[36px] md:-mt-[72px] text-white z-[8] flex flex-col md:flex-row flex-wrap justify-around items-center">
          <ParticlesBg className="bg-black/80 absolute top-0 left-0 z-1 pointer-events-none" />
          <div className="z-[4] flex flex-col gap-4">
            <div className="font-bold text-5xl pt-[75px]">CryptoMart</div>
            <div className="mx-2">
              <p>Discover A New World of Shopping</p>
            </div>
            <div className="flex flex-row items-center justify-center mt-10">
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
              
              {isConnected && balance && (
                <div className="m-auto ml-10 flex gap-4 items-center">
                  <img src="/ethereum-svgrepo-com.svg" className="w-[25px]" alt="Ethereum" />
                  <p className="font-semibold">{balance}</p>
                  <p className="text-sm opacity-80">
                    {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : ''}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="z-[4] w-full md:w-auto px-4">
            <img
              className="md:max-w-[550px] w-full max-w-[400px] mx-auto"
              src="/undraw_shopping_app_flsj (1).svg"
              alt="Shopping App"
            />
          </div>
          <div
            onClick={() => {
              window.scrollBy({ top: innerHeight - 72, behavior: 'smooth' });
            }}
            className="z-[4] cursor-pointer scroll-down-anim rounded-full absolute bottom-10 left-[50%]"
          >
            <div className="grow-animation"></div>
            <img className="h-[50px]" src="/down-arrow.png" alt="Scroll Down" />
          </div>
        </div>

        <div className="text-white w-full flex flex-col">
          <div className="mx-auto md:max-w-[900px] w-full px-8 mb-9">
            <div className="text-center text-3xl my-5 py-auto">
              Frequently Asked Questions
            </div>
            <FAQ />
          </div>
        </div>

        <Divider className="max-w-[800px] w-full mx-auto" />

        <figure className="max-w-screen-md mx-auto text-center py-10 mt-5 mb-10">
          <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-2xl italic font-medium text-gray-900 dark:text-white">&quot;Cryptomart&apos;s commitment to continuous improvement is evident in the regular updates and enhancements to the platform. It&apos;s refreshing to see a company that listens to its users and strives to make the shopping experience better for everyone.&quot;</p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael R.</cite>
              <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">Customer</cite>
            </div>
          </figcaption>
        </figure>

        <Divider className="w-full max-w-[800px] mx-auto" />
        <ReachUs />
      </div>
    </>
  );
}

export default HomePage;
