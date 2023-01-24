import React, { useRef, useState } from "react";
import cl from "./Device.module.scss";
import { items } from "./items";
import empty from "../../assets/icons/empty.png";
import money from "../../assets/img/money.png"

const Device = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState();
  const [priceProduct, setPriceProduct] = useState();
  const [balance, setBalance] = useState(100);
  const [productId, setproductId] = useState();
  const [notEnough, setNotEnough] = useState(false)

  function productSelection(id, price) {
    setNumber(id);
    setPriceProduct(price);

    let itemId = items.filter((item) => item.id === id);
    let indexId = items.indexOf(itemId[0]);
    setproductId(indexId);
  }

  function buyProduct() {
    if (balance >= priceProduct) {
      setBalance(prev => prev - priceProduct)
      items[productId].amount = 0;
      setCounter((prev) => prev + 1);
    } else {
      setNotEnough(true)
    }
  }

  function change() {
    setBalance(0)
  }

  return (
    <div className={cl.Device}>
      <div className={cl.Device_table}>
        <div className={cl.Device__shop}>
          {items.map((item) => (
            <div
              className={cl.Device__shop_item}
              key={item.id}
              onClick={() => productSelection(item.id, item.price)}
            >
              <div className={cl.amount}>
                <p>{item.id}</p>
              </div>
              <div className={cl.product}>{item.name}</div>
              {item.amount === 0 ? (
                <img src={empty} alt="empty" style={{ opacity: "0.5" }} />
              ) : (
                <img src={item.img} alt={item.name} />
              )}
            </div>
          ))}
        </div>
        <div className={cl.Device__terminal}>
          <div className={cl.Device__terminal_score}>
            <p>Ваш баланс: {balance}</p>
            <p>Вы выбрали: {number}</p>
            <p>Стоимость: {priceProduct}</p>
            {balance > priceProduct ? (
              <p>Остаток: {balance - priceProduct}</p>
            ) : (
              <p>Остаток: 0</p>
            )}
            {balance < priceProduct ? (<p style={{color: "red"}}>Не хватает средств!</p>) : (<p style={{color: "green"}}>Вам хватает</p>)}
          </div>
          <div className={cl.Device__terminal_input}>
            <input
              type="number"
              min="1"
              max="9"
              placeholder="Выберите товар"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className={cl.Device__terminal_buttons}>
            <button type="button" onClick={buyProduct}>
              Купить
            </button>
            <button type="button" onClick={change}>Сдача</button>
          </div>
          <div className={cl.Device__terminal_title}>
            <h2>Вставьте деньги</h2>
          </div>
          <div className={cl.Device__terminal_receiver}>
            <div className={cl.slot}></div>
          </div>
        </div>
      </div>
      <div className={cl.Device_push}>
        <h2>Push</h2>
      </div>
    </div>
  );
};

export default Device;
