import React, { useState } from "react";
import cl from "./Device.module.scss";
import { items } from "./items";
import empty from "../../assets/icons/empty.png";

const Device = ({ setWalletBalance, balance, setBalance, thing }) => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(1);
  const [priceProduct, setPriceProduct] = useState(items[0].price);
  const [productId, setproductId] = useState(0);
  const [moneyChange, setMoneyChange] = useState([
    { nominal: 1, amount: 50 },
    { nominal: 5, amount: 332 },
    { nominal: 10, amount: 137 },
    { nominal: 50, amount: 25 },
    { nominal: 100, amount: 26 },
    { nominal: 500, amount: 4 },
  ]);

  function productSelection(id, price) {
    setNumber(id);
    setPriceProduct(price);

    let itemId = items.filter((item) => item.id === id);
    let indexId = items.indexOf(itemId[0]);
    setproductId(indexId);
  }

  function buyProduct() {
    if (balance >= priceProduct && items[productId].amount !== 0) {
      setBalance((prev) => prev - priceProduct);
      items[productId].amount = 0;
      setCounter((prev) => prev + 1);
      thing.push(items[productId]);
    }
  }

  function change() {
    let remainder = balance;

    if (remainder > 0) {
      let arr = []; // массив номинала для сдачи
      let empty = false;
      moneyChange.forEach((item) => {
        if (item.nominal <= remainder && item.amount >= 2) {
          arr.push(item.nominal); // если номинал подходит для размена, то добавляем в массив
        }
      });

      for (let i = 0; remainder > 0; i++) {
        let nominalo = Math.max.apply(null, arr); // определяем номинал
        let coin = Math.floor(remainder / nominalo); // определяем количество выдаваемых купюр
        let coinId = moneyChange.filter((item) => item.nominal === nominalo); // находим нужную купюру
        let indexId = moneyChange.indexOf(coinId[0]); // получаем id в массиве, нужной нам купюры

        if (moneyChange[indexId].amount > coin) {
          moneyChange[indexId].amount = moneyChange[indexId].amount - coin; // забираем купюры
          remainder = remainder - nominalo * coin; // изменяем баланс на количество забранных купюр
        } else {
          arr.pop();
          if (arr.length <= 1) {
            empty = true;
            console.log("Сдачи нет, возьми шоколадку");
            remainder = 0;
            thing.push(items[0]); // даём товар, если нет сдачи
          }
        }
        if (i > 12) {
          remainder = 0;
          // подстраховка при зацикливании
        }
      }
      if (empty) {
        setCounter(100);
        setBalance(remainder);
        setWalletBalance((prev) => prev + remainder);
      } else {
        setCounter(1);
        setBalance(remainder);
        setWalletBalance((prev) => prev + balance);
      }
    }
  }

  return (
    <div className={cl.Device}>
      <div className={cl.Device_table}>
        <div className={cl.Device__shop}>
          <span className={cl.flare}></span>
          {items.map((item) => (
            <div
              className={cl.Device__shop_item}
              key={item.id}
              onClick={() => productSelection(item.id, item.price)}
            >
              <div className={cl.amount}>
                <p>{item.id}</p>
              </div>
              <div className={cl.product}>
                <p>{item.name} </p>
              </div>
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
            <p>
              Баланс: <b>{balance} ₽</b>
            </p>
            <p>
              Вы выбрали: <b>{number}</b>
            </p>
            <div className={cl.thing}>
              <img src={items[productId].img} alt={items[productId].name} />
              <p>{items[productId].name}</p>
            </div>
            <p>
              Стоимость:
              <br /> <b>{priceProduct} ₽</b>
            </p>

            {balance >= priceProduct ? (
              <div className={cl.valid} style={{ background: "#c7ffd6" }}>
                <div
                  className={cl.square}
                  style={{ color: "rgba(0, 121, 85, 0.6)" }}
                >
                  !
                </div>
                <p style={{ color: " rgba(0, 121, 85, 0.6)" }}>Вам хватает</p>
              </div>
            ) : (
              <div className={cl.valid} style={{ background: "#F990A3" }}>
                <div className={cl.square} style={{ color: "#F990A3" }}>
                  !
                </div>
                <p style={{ color: "#FC002D" }}>Не хватает</p>
              </div>
            )}
            {counter === 100 && (
              <div className={cl.valid} style={{ background: "#F990A3", marginTop: "10px" }}>
                <div className={cl.square} style={{ color: "#F990A3" }}>
                  !
                </div>
                <p style={{ color: "#FC002D"}}>Нет сдачи</p>
              </div>
            )}
          </div>

          <div className={cl.Device__terminal_buttons}>
            <button type="button" onClick={buyProduct}>
              Купить
            </button>
            <button type="button" onClick={change} className={cl.change}>
              Сдача
            </button>
          </div>

          <div className={cl.Device__terminal_receiver}>
            <p>Вставьте деньги</p>
            <div className={cl.slotBorder}>
              <div className={cl.slot}></div>
            </div>
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
