// Import React hooks for managing component state and side effects
import { useState } from "react";
// Import notistack for displaying notifications
import { useSnackbar } from "notistack";
// Import useEthereum hook for Ethereum functionality
import { useEthereum } from "../contexts/useEthereum";
// Import API class directly
import api from "../Api/Api";
// Import NextUI components for UI elements
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
// Import PropTypes for prop validation
import PropTypes from "prop-types";

// ProductCard component for displaying individual products with purchase functionality
function ProductCard({ id, url, name, price }) {
  // Hook to manage modal open/close state
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // State for form fields in the order modal
  const [transactionAddress, setTransactionAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Get Ethereum provider and snackbar from context
  const { eth } = useEthereum();
  const { enqueueSnackbar } = useSnackbar();

  // Function to handle product purchase with cryptocurrency
  const buyProduct = async () => {
    // Open the modal first to collect order details
    onOpen();
  }

  // Function to handle payment after order details are submitted
  const handlePayment = async () => {
    // Check if required fields are filled
    if (!deliveryAddress.trim() || !phone.trim()) {
      enqueueSnackbar("Please fill in all required fields.", { variant: "error" });
      return;
    }

    // Check if Ethereum provider is available
    if (!eth) {
      // Show error if no wallet is available
      enqueueSnackbar("Install A wallet.", { variant: "error" });
      return;
    }
    try {
      // Check if wallet is connected
      if (!eth.isConnected()) {
        // Request wallet connection if not connected
        await requestWalletConnection();
        // Check again if connection was successful
        if (!eth.isConnected()) {
          // Show error if wallet access was denied
          enqueueSnackbar("Denied wallet access.", { variant: "error" });
          return;
        }
      }
      // Get the first account from the connected wallet
      const from = (await eth.request({ method: "eth_requestAccounts" }))[0];
      // Log the transaction value in hex format
      console.log('0x' + (price * 10 ** 18).toString('16'));
      // Prepare transaction parameters
      const params = [
        {
          from,
          to: import.meta.env.VITE_VENDOR_CRYPTO_ADDRESS,
          // Commented out gas and gasPrice parameters (using default values)
          // 30400
          // gas: "0x76c0",
          // // 10000000000000
          // gasPrice: "0x9184e72a000",
          // // 2441406250
          // Convert price to wei and then to hex format
          value: '0x' + (price * 10 ** 18).toString('16'),
          // Commented out data parameter
          // data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        },
      ];

      // Log the transaction parameters
      console.log(params);

      // Send the transaction and get transaction ID
      const TxID = await eth.request({
        method: "eth_sendTransaction",
        params
      })

      // Set the transaction address and create order
      setTransactionAddress(TxID);
      // Create order immediately after successful payment
      await makeOrder();
    } catch (err) {
      // Show warning if transaction was canceled
      enqueueSnackbar("Transaction Canceled.", { variant: "warning" });
    }
  }

  // Function to request wallet connection
  const requestWalletConnection = async () => {
    try {
      // Show notification that wallet connection is being requested
      enqueueSnackbar("requesting wallet.");
      // Request accounts from Metamask
      const accounts = await eth.request({ method: "eth_requestAccounts" });
      // Check if any accounts were selected
      if (accounts.length == 0) {
        // Show warning if no accounts selected
        enqueueSnackbar("no accounts selected.", { variant: "warning" });
        return;
      }

      // Show success message with the account being used
      // enqueueSnackbar(`will use ${accounts[0]}`, { variant: "success" });
      // // Get the balance of the selected account in wei (hex format)
      // const wei_hex = await eth.request({
      //   method: "eth_getBalance",
      //   params: [accounts[0], "latest"],
      // });
      // Convert wei to ETH and format to 4 decimal places
      // const eth_bal = (parseInt(wei_hex, 16) / 10 ** 18).toFixed(4);

      // Note: setBalance is not defined in this component, so we'll skip this line
      // setBalance(eth_bal + " ETH");
    } catch (err) {
      // Show error if wallet connection was denied
      enqueueSnackbar(`wallet denied`, { variant: "error" });
    }
  }

  // Function to create order in the backend after successful payment
  const makeOrder = async () => {
    try {
      // Make API call to create order with transaction details
      const res = await api.makeOrder(id, deliveryAddress, transactionAddress, phone);
      // Log the response
      console.log('res', res);
      // Check if there was an error in the order creation
      if (res.error) {
        // Show error message and transaction ID
        enqueueSnackbar("Something went wrong ,email us your transaction id ", { variant: 'error' });
        // Show transaction ID after a short delay
        setTimeout(() => enqueueSnackbar(`TxID : ${transactionAddress}`, { variant: 'info' }), 300);
      } else {
        // Show success message for payment
        enqueueSnackbar("Payment Successfull", { variant: 'success' });
        // Show follow-up message after a short delay
        setTimeout(() => enqueueSnackbar("We will reach to you soon"), 200)
        // Show transaction ID after another delay
        setTimeout(() => enqueueSnackbar(`TxID : ${transactionAddress}`, { variant: 'info' }), 300)
      }
    } catch (err) {
      // Log any errors
      console.log(err);
      // Show error message and transaction ID
      enqueueSnackbar("Something went wrong ,email us your transaction id ", { variant: 'error' });
      // Show transaction ID after a short delay
      setTimeout(() => enqueueSnackbar(`TxID : ${transactionAddress}`, { variant: 'info' }), 300)
    }
  }

  // Return the JSX structure for the product card
  return (
    <div>
      {/* Order details modal */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {/* Modal content with close function */}
          {(onClose) => (
            <>
              {/* Modal header */}
              <ModalHeader className="flex flex-col gap-1">
                {transactionAddress ? "Order Details" : "Enter Order Details"}
              </ModalHeader>
              {/* Modal body with form fields */}
              <ModalBody>
                {/* Transaction reference display - only show after payment */}
                {transactionAddress && (
                <p className="text-green-700 mb-4 text-[0.65rem] select-all">REF : {transactionAddress}</p>
                )}

                {/* Phone number input field */}
                <label>
                  <p className="text-white mb-4 text-lg">Phone Number</p>
                  <Input placeholder="Your Phone Number" type="tel" onChange={(e) => { setPhone(e.target.value); }} />
                </label>

                {/* Shipping address input field */}
                <label>
                  <p className="text-white mb-4 text-lg">Shipping Address</p>
                  <Textarea placeholder="Your Shipping Address Here" onChange={(e) => { setDeliveryAddress(e.target.value); }} />
                </label>
              </ModalBody>
              {/* Modal footer with submit button */}
              <ModalFooter>
                <Button color="primary" onPress={() => { handlePayment(); onClose(); }}>
                  {transactionAddress ? "Done" : "Proceed to Payment"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Product card content */}
      <div className="w-[300px] flex flex-col h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/70 blur-bg dark:border-gray-700 mx-auto">
        {/* Product image */}
        <img
          className="p-8 rounded-t-lg my-auto object-contain"
          src={url}
          alt="product image"
        />
        {/* Product details section */}
        <div className="px-5 pb-5">
          {/* Product name link */}
          <a href="#">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>

          {/* Price and buy button section */}
          <div className="flex items-center justify-between mt-4">
            {/* Product price in ETH */}
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {price} ETH
            </span>
            {/* Buy now button */}
            <button onClick={buyProduct} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation for the ProductCard component
ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

// Export the ProductCard component as the default export
export default ProductCard;
