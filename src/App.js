import { useState } from "react";
import Bag from "./Components/Bag/Bag";
import Device from "./Components/Device/Device";
import Menu from "./Components/Menu/Menu";
import Wallet from "./Components/Wallet/Wallet";
import "./index.scss";

function App() {
  const [balance, setBalance] = useState(0);
  const [walletBalance, setWalletBalance] = useState(2500);
  const [thing, setThing] = useState([]);
 

  return (
    <div className="wrapper">
      <Device
        balance={balance}
        setBalance={setBalance}
        setWalletBalance={setWalletBalance}
        setThing={setThing}
        thing={thing}
      />
      <Menu />
      <div className="column">
        <Wallet
          walletBalance={walletBalance}
          setWalletBalance={setWalletBalance}
          setBalance={setBalance}
       
        />
        <Bag thing={thing} />
      </div>
    </div>
  );
}

export default App;
