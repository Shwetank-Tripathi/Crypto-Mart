import { useState } from "react";
import { useSnackbar } from "notistack";
import { useEthereum } from "../contexts/useEthereum";
import api from "../Api/Api";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Textarea } from "@nextui-org/react";
import PropTypes from "prop-types";

function ProductCard({ id, url, name, price }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [transactionAddress, setTransactionAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phone, setPhone] = useState('');

  const { eth } = useEthereum();
  const { enqueueSnackbar } = useSnackbar();

  const buyProduct = async () => {
    onOpen();
  }

  const handlePayment = async () => {
    if (!deliveryAddress.trim() || !phone.trim()) {
      enqueueSnackbar("Please fill in all required fields.", { variant: "error" });
      return;
    }

    if (!eth) {
      enqueueSnackbar("Install A wallet.", { variant: "error" });
      return;
    }
    try {
      if (!eth.isConnected()) {
        await requestWalletConnection();
        if (!eth.isConnected()) {
          enqueueSnackbar("Denied wallet access.", { variant: "error" });
          return;
        }
      }
      const from = (await eth.request({ method: "eth_requestAccounts" }))[0];
      console.log('0x' + (price * 10 ** 18).toString('16'));
      const params = [
        {
          from,
          to: import.meta.env.VITE_VENDOR_CRYPTO_ADDRESS,
          value: '0x' + (price * 10 ** 18).toString('16'),
        },
      ];

      console.log(params);

      const TxID = await eth.request({
        method: "eth_sendTransaction",
        params
      })

      setTransactionAddress(TxID);
      await makeOrder();
    } catch (err) {
      enqueueSnackbar("Transaction Canceled.", { variant: "warning" });
    }
  }

  const requestWalletConnection = async () => {
    try {
      enqueueSnackbar("requesting wallet.");
      const accounts = await eth.request({ method: "eth_requestAccounts" });
      if (accounts.length == 0) {
        enqueueSnackbar("no accounts selected.", { variant: "warning" });
        return;
      }
    } catch (err) {
      enqueueSnackbar(`wallet denied`, { variant: "error" });
    }
  }

  const makeOrder = async () => {
    try {
      const res = await api.makeOrder(id, deliveryAddress, transactionAddress, phone);
      console.log('res', res);
      if (res.error) {
        enqueueSnackbar("Something went wrong ,email us your transaction id ", { variant: 'error' });
        setTimeout(() => enqueueSnackbar(`TxID : ${transactionAddress}`, { variant: 'info' }), 300);
      } else {
        enqueueSnackbar("Payment Successfull", { variant: 'success' });
        setTimeout(() => enqueueSnackbar("We will reach to you soon"), 200)
        setTimeout(() => enqueueSnackbar(`TxID : ${transactionAddress}`, { variant: 'info' }), 300)
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar("Something went wrong ,email us your transaction id ", { variant: 'error' });
      setTimeout(() => enqueueSnackbar(`TxID : ${transactionAddress}`, { variant: 'info' }), 300)
    }
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {transactionAddress ? "Order Details" : "Enter Order Details"}
              </ModalHeader>
              <ModalBody>
                {transactionAddress && (
                <p className="text-green-700 mb-4 text-[0.65rem] select-all">REF : {transactionAddress}</p>
                )}

                <label>
                  <p className="text-white mb-4 text-lg">Phone Number</p>
                  <Input placeholder="Your Phone Number" type="tel" onChange={(e) => { setPhone(e.target.value); }} />
                </label>

                <label>
                  <p className="text-white mb-4 text-lg">Shipping Address</p>
                  <Textarea placeholder="Your Shipping Address Here" onChange={(e) => { setDeliveryAddress(e.target.value); }} />
                </label>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={() => { handlePayment(); onClose(); }}>
                  {transactionAddress ? "Done" : "Proceed to Payment"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="w-[300px] flex flex-col h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800/70 blur-bg dark:border-gray-700 mx-auto">
        <img
          className="p-8 rounded-t-lg my-auto object-contain"
          src={url}
          alt="product image"
        />
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {price} ETH
            </span>
            <button onClick={buyProduct} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ProductCard;
