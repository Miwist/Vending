import React from "react";
import cl from "./Menu.module.scss";
import wallet from "../../assets/icons/wallet.png";
import bag from "../../assets/icons/bag.png";

const Menu = () => {
  return (
    <div className={cl.Menu}>
      <button type="button">
        <img src={wallet} alt="wallet"  />
      </button>
      <button type="button">
        <img src={bag} alt="bag"  />
      </button>
    </div>
  );
};

export default Menu;
