import { useContext } from "react";

import { MetamaskContext } from "./MetamaskProvider";
 
export const useEthereum = () => useContext(MetamaskContext);
