// Import React hook for using context
import { useContext } from "react";

// Import the MetamaskContext from the provider file
import { MetamaskContext } from "./MetamaskProvider";
 
// Custom hook to easily access the Metamask context from any component
export const useEthereum = () => useContext(MetamaskContext); 