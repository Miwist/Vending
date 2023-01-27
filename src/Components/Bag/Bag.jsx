import React from "react";
import cl from "./Bag.module.scss";

const Bag = ({ thing }) => {
  return (
    <div className={cl.Bag}>
      <h1>Ваша сумка</h1>
      {thing.length > 0 ? (
        <div className={cl.Bag_items}>
          {thing.map((item) => (
            <div className={cl.Bag__item} key={item.id}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Пока ничего нет</p>
      )}
    </div>
  );
};

export default Bag;
