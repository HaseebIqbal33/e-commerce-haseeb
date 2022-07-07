import React, { useEffect, useState } from "react";
import classes from "./cart-item.module.scss";

function CartItem({ item, deleteItem, updateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);

  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["image"]}>
        <img src={item.image} alt={item.id} />
      </div>
      <div className={classes["details"]}>
        <h6>{item.category}</h6>
        <p>{item.title}</p>
      </div>
      <div className={classes["buttons"]}>
        <p
          onClick={() => {
            setQuantity(parseInt(quantity) - 1);
            updateQuantity(item.id, parseInt(quantity) - 1);
          }}
        >
          -
        </p>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => {
            setQuantity(e.target.value);
            updateQuantity(item.id, parseInt(quantity));
          }}
        />
        <p
          onClick={() => {
            setQuantity(parseInt(quantity) + 1);
            updateQuantity(item.id, parseInt(quantity) + 1);
          }}
        >
          +
        </p>
      </div>
      <div className={classes["price"]}>${item.price * quantity}</div>
      <div className={classes["delete"]} onClick={() => deleteItem(item.id)}>
        X
      </div>
    </div>
  );
}

export default CartItem;
