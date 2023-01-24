import React, { useState } from 'react'
import cl from "./Wallet.module.scss"
import money from "../../assets/icons/bill.png"

const Wallet = (setBalance) => {
  const [walletBalance, setWalletBalance] = useState(2500)
  return (
    <div className={cl.Wallet}>
      <div className={cl.Wallet_title}>
             <h1>Ваш кошелёк: {walletBalance}</h1>
      </div>
      <div className={cl.Wallet_bill}>
        <img src={money} alt="money" />
        <button type='button' onClick={() => setBalance(prev => prev + 100)}>100</button>
      </div>
        
    </div>
  )
}

export default Wallet