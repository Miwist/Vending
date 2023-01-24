import React from 'react'
import Device from './Device/Device'
import cl from "./Main.module.scss"
import Wallet from './Wallet/Wallet'

const Main = () => {
  return (
    <div className={cl.Main}>
        <Device />
        <Wallet />
    </div>
  )
}

export default Main