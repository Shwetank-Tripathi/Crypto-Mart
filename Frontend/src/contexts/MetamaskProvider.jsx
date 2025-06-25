// Import React hooks for creating context and managing state
import { createContext, useState, useEffect } from "react";
// Import PropTypes for prop validation
import PropTypes from "prop-types";

// Create a React context for sharing Ethereum/Metamask functionality across components
export const MetamaskContext = createContext();

// Provider component that wraps the app and provides Ethereum functionality
export const MetamaskProvider = ({ children }) => {
    // State to store the Ethereum provider (Metamask) instance
    const [eth, setEth] = useState(null);
    // State to track if ethereum is undefined (no wallet installed)
    const [isEthereumUndefined, setIsEthereumUndefined] = useState(true);
    // State to track if wallet is connected
    const [isConnected, setIsConnected] = useState(false);
    // State to store the connected account address
    const [account, setAccount] = useState(null);
    // State to store the wallet balance
    const [balance, setBalance] = useState(null);
    // State to track if we're currently connecting
    const [isConnecting, setIsConnecting] = useState(false);

    // Use useEffect to check for Metamask when component mounts
    useEffect(() => {
        // Check if the ethereum object exists in the window (Metamask is installed)
        if ('ethereum' in window) {
            // Set the ethereum provider in state
            setEth(window.ethereum);
            // Update ethereum undefined state
            setIsEthereumUndefined(false);
            
            // Check if already connected
            checkConnectionStatus();
            
            // Listen for account changes
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            // Listen for chain changes
            window.ethereum.on('chainChanged', handleChainChanged);
        } else {
            // No ethereum provider found
            setIsEthereumUndefined(true);
            setIsConnected(false);
            setAccount(null);
            setBalance(null);
        }
        
        // Cleanup function to remove event listeners
        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', handleChainChanged);
            }
        };
    }, []); // Empty dependency array means this runs once on mount

    // Function to check if wallet is already connected
    const checkConnectionStatus = async () => {
        try {
            // Get current accounts
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length > 0) {
                // Wallet is already connected
                setAccount(accounts[0]);
                setIsConnected(true);
                // Get balance for the connected account
                await getBalance(accounts[0]);
            } else {
                // Wallet is not connected
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

    // Function to handle account changes
    const handleAccountsChanged = async (accounts) => {
        if (accounts.length === 0) {
            // User disconnected wallet
            setIsConnected(false);
            setAccount(null);
            setBalance(null);
        } else {
            // Account changed
            setAccount(accounts[0]);
            setIsConnected(true);
            await getBalance(accounts[0]);
        }
    };

    // Function to handle chain changes
    const handleChainChanged = () => {
        // Reload the page when chain changes
        window.location.reload();
    };

    // Function to get balance for a given account
    const getBalance = async (accountAddress) => {
        try {
            // Get the balance of the account in wei (hex format)
            const wei_hex = await window.ethereum.request({
                method: "eth_getBalance",
                params: [accountAddress, "latest"],
            });
            // Convert wei to ETH (divide by 10^18) and format to 4 decimal places
            const eth_bal = (parseInt(wei_hex, 16) / 10 ** 18).toFixed(4);
            // Set the balance state with ETH suffix
            setBalance(eth_bal + " ETH");
        } catch (error) {
            console.error('Error getting balance:', error);
            setBalance(null);
        }
    };

    // Function to connect wallet
    const connectWallet = async () => {
        if (!eth) {
            throw new Error("No Ethereum provider found");
        }
        
        setIsConnecting(true);
        try {
            // Request accounts from Metamask
            const accounts = await eth.request({ method: "eth_requestAccounts" });
            if (accounts.length === 0) {
                throw new Error("No accounts selected");
            }
            
            // Set account and connection status
            setAccount(accounts[0]);
            setIsConnected(true);
            // Get balance for the connected account
            await getBalance(accounts[0]);
        } catch (error) {
            console.error('Error connecting wallet:', error);
            throw error;
        } finally {
            setIsConnecting(false);
        }
    };

    // Return the context provider with all the ethereum-related state and functions
    return (
        // Provide the ethereum instance and all related state to all child components
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
            {/* Render the child components passed to this provider */}
            {children}
        </MetamaskContext.Provider>
    )
}

// PropTypes validation for the MetamaskProvider component
MetamaskProvider.propTypes = {
    children: PropTypes.node.isRequired
};