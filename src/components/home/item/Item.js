import React from "react";
import classes from "./item.module.scss";
import { useItemContext } from "../../context/ItemContextContainer";

function Item({ item }) {
  const { cartItems, setCart } = useItemContext();

  return (
    <div className={classes["item"]}>
      <div className={classes["upper-section"]}>
        <img src={item.image} alt={item.id} />
        <p>{item.title}</p>
      </div>
      <div className={classes["footer-section"]}>
        <div className={classes["category"]}>
          <h6>Category: {item.category}</h6>
        </div>
        <div className={classes["price"]}>
          <h4>${item.price}</h4>
        </div>
        {cartItems.find((cartItem) => item.id === cartItem.id) === undefined ? (
          <div
            className={classes["cart-button"]}
            onClick={() => {
              setCart(item);
            }}
          >
            Add To Cart
          </div>
        ) : (
          <div className={classes["cart-button"]}>Added to Cart</div>
        )}
      </div>
    </div>
  );
}

export default Item;
