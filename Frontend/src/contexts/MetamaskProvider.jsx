import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const MetamaskContext = createContext();

export const MetamaskProvider = ({ children }) => {
    const [eth, setEth] = useState(null);
    const [isEthereumUndefined, setIsEthereumUndefined] = useState(true);
    const [isConnected, setIsConnected] = useState(false);
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(null);
    const [isConnecting, setIsConnecting] = useState(false);

    useEffect(() => {
        if ('ethereum' in window) {
            setEth(window.ethereum);
            setIsEthereumUndefined(false);
            
            checkConnectionStatus();
            
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);
        } else {
            setIsEthereumUndefined(true);
            setIsConnected(false);
            setAccount(null);
            setBalance(null);
        }
        
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', handleChainChanged);
            }
        };
    }, []);

    const checkConnectionStatus = async () => {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                setAccount(accounts[0]);
                setIsConnected(true);
                await getBalance(accounts[0]);
            } else {
                setIsConnected(false);
                setAccount(null);
                setBalance(null);
            }
        } catch (error) {
            console.error('Error checking connection status:', error);
            setIsConnected(false);
            setAccount(null);
            setBalance(null);
        }
    };

    const handleAccountsChanged = async (accounts) => {
        if (accounts.length === 0) {
            setIsConnected(false);
            setAccount(null);
            setBalance(null);
        } else {
            setAccount(accounts[0]);
            setIsConnected(true);
            await getBalance(accounts[0]);
        }
    };

    const handleChainChanged = () => {
        window.location.reload();
    };

    const getBalance = async (accountAddress) => {
        try {
            const wei_hex = await window.ethereum.request({
                method: "eth_getBalance",
                params: [accountAddress, "latest"],
            });
            const eth_bal = (parseInt(wei_hex, 16) / 10 ** 18).toFixed(4);
            setBalance(eth_bal + " ETH");
        } catch (error) {
            console.error('Error getting balance:', error);
            setBalance(null);
        }
    };

    const connectWallet = async () => {
        if (!eth) {
            throw new Error("No Ethereum provider found");
        }
        
        setIsConnecting(true);
        try {
            const accounts = await eth.request({ method: "eth_requestAccounts" });
            if (accounts.length === 0) {
                throw new Error("No accounts selected");
            }
            
            setAccount(accounts[0]);
            setIsConnected(true);
            await getBalance(accounts[0]);
        } catch (error) {
            console.error('Error connecting wallet:', error);
            throw error;
        } finally {
            setIsConnecting(false);
        }
    };

    return (
        <MetamaskContext.Provider value={{ 
            eth, 
            isEthereumUndefined, 
            isConnected, 
            account, 
            balance, 
            isConnecting,
            connectWallet,
            getBalance
        }}>
            {children}
        </MetamaskContext.Provider>
    )
}

MetamaskProvider.propTypes = {
    children: PropTypes.node.isRequired
};
