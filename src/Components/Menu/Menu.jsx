import React, { useState } from "react";
import cl from "./Menu.module.scss";
import wallet from "../../assets/icons/wallet.png";
import bag from "../../assets/icons/bag.png";
import Wallet from "../Wallet/Wallet";
import Bag from "../Bag/Bag";

const Menu = ({ thing, walletBalance, setWalletBalance, setBalance, balance }) => {
  const [openWallet, setOpenWallet] = useState(false);
  const [openBag, setOpenBag] = useState(false);

  return (
    <div className={cl.Menu}>
      <div className={cl.Menu_buttons}>
        {openWallet ? (
          <button type="button" onClick={() => setOpenWallet(!openWallet)} style={{borderColor: "#3454fb"}}>
            <img src={wallet} alt="wallet" />
          </button>
        ) : (
          <button type="button" onClick={() => setOpenWallet(!openWallet)}>
            <img src={wallet} alt="wallet" />
          </button>
        )}

        {openBag ? (
          <button type="button" onClick={() => setOpenBag(!openBag)} style={{borderColor: "#3454fb"}}>
            <img src={bag} alt="bag" />
          </button>
        ) : (
          <button type="button" onClick={() => setOpenBag(!openBag)}>
            <img src={bag} alt="bag" />
          </button>
        )}
      </div>
      <div className={cl.Menu_elements}>
        {openWallet && (
          <Wallet
          balance={balance}
            walletBalance={walletBalance}
            setWalletBalance={setWalletBalance}
            setBalance={setBalance}
            setOpenWallet={setOpenWallet}
          />
        )}

        {openBag && <Bag thing={thing} setOpenBag={setOpenBag}/>}
      </div>
    </div>
  );
};

export default Menu;
