import React from "react";
import cl from "./Bag.module.scss";

const Bag = ({ thing, setOpenBag }) => {
  return (
    <div className={cl.Bag}>
      <h1>Ваша сумка</h1>
      {thing.length > 0 ? (
        <div className={cl.Bag_items}>
          {thing.map((item) => (
            <div className={cl.Bag__item} key={Math.random()}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Пока ничего нет</p>
      )}
      <button type="button" onClick={() => setOpenBag(false)}>Закрыть</button>
    </div>
  );
};

export default Bag;
