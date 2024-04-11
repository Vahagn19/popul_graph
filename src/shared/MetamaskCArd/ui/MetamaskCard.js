import { Web3 } from "web3";
import { useState, useContext } from "react";
import { ErrorContext } from "shared/Error/ui/ErrorProvider";
import { Button } from "app/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "app/ui/card";
import testsvg from "app/assets/metamask.svg";
import { MetaMaskAvatar } from "react-metamask-avatar";

function MetamaskCard() {
  const [userAccount, setUserAccount] = useState(null);
  const { setError, setErrorMessage } = useContext(ErrorContext);

  async function connectMetamask() {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3.eth.getAccounts();
        const balance = await web3.eth.getBalance(accounts[0]);
        const hash = await web3.eth.getHashRate();
        setUserAccount({
          account: accounts[0],
          balance: web3.utils.fromWei(balance, "ether"),
          hash: web3.utils.fromWei(hash, "ether"),
        });
      } catch (error) {
        setErrorMessage(error.message);
        setError(true);
      }
    } else {
      setErrorMessage("You dont have MetaMask extension");
      setError(true);
    }
  }

  return (
    <Card 
    className="mt-4 mr-4 mb-4 lg:col-span-2 w-full md:max-w-[350px] flex flex-col justify-between relative">
      <CardHeader className="flex justify-center">
        <h2 className="scroll-m-20 text-xl text-center font-semibold tracking-tight">
          Metamask Wallet
        </h2>
      </CardHeader>
      {userAccount ? (
        <>
          <CardTitle className="flex flex-col justify-center mb-6">
            <div className="flex justify-center mb-5">
            <MetaMaskAvatar address={userAccount.account} size={45} />
            </div>

            <div className="flex flex-col item-center">
            <h2 className="text-center mb-2">Account adress</h2>
            <span className="text-xs text-center"> {userAccount.account}</span>
            </div>
   
          </CardTitle>
          <CardContent className="flex justify-center text-3xl">
            <div className="flex flex-col item-center">
              <div>
                <span className="text-4xl">{Number(userAccount.balance)} ETH</span>
              </div>
              <div className="flex ml-5 mt-1">
                <span className="text-xl">{Number(userAccount.hash)} USD</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t">
            <Button className="mt-2 ">Manage Wallet</Button>
          </CardFooter>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-full mb-20">
          <img
            src={testsvg}
            className="w-16 h-16 mb-4 sm:w-20 sm:h-20"
            alt="Metamask"
          />
          <Button onClick={() => connectMetamask()}>Connect Metamask</Button>
        </div>
      )}
    </Card>
  );
}

export default MetamaskCard;
