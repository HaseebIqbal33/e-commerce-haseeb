import React, { useEffect } from "react";
import { useItemContext } from "../context/ItemContextContainer";
import classes from "./cart.module.scss";
import CartItem from "./cart-item/CartItem";

function Cart() {
  const {
    cartItems,
    deleteItem,
    updateQuantity,
    cartTotal,
    calculateCartTotal,
  } = useItemContext();

  useEffect(() => {
    calculateCartTotal();
    console.log("Cart Total " + cartTotal);
  }, [cartItems]);

  return (
    <div className={classes["cart"]}>
      <div className={classes["cart-items"]}>
        <div className={classes["header"]}>
          <h4>Shopping Cart</h4>
          <p>{cartItems.length} Items</p>
        </div>
        <hr />
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className={classes["total-section"]}>
        <h2>Total</h2>
        <hr />
        <h5>Total: $ {cartTotal}</h5>
        <div className={classes["checkout"]}>CHECKOUT</div>
      </div>
    </div>
  );
}

export default Cart;
