import React from "react";
import cl from "./Wallet.module.scss";
import money from "../../assets/icons/coin.png";

const Wallet = ({
  walletBalance,
  setWalletBalance,
  setBalance,
  setOpenModal,
}) => {
  function setMoney(bill) {
    if (walletBalance >= bill) {
      setWalletBalance((prev) => prev - bill);
      setBalance((prev) => prev + bill);
    }
  }
  return (
    <div className={cl.Wallet}>
      <div className={cl.Wallet_title}>
        <h1>
          <img src={money} alt="money" /> Ваш баланс: {walletBalance} ₽
        </h1>
      </div>
      <p>Выберите купюру</p>
      <div className={cl.Wallet_buttons}>
        <button type="button" onClick={() => setMoney(50)}>
          50 ₽
        </button>

        <button type="button" onClick={() => setMoney(100)}>
          100 ₽
        </button>

        <button type="button" onClick={() => setMoney(500)}>
          500 ₽
        </button>

        <button type="button" onClick={() => setMoney(1000)}>
          1000 ₽
        </button>
      </div>
    </div>
  );
};

export default Wallet;
