import React, { useContext, useEffect, useState } from "react";
import { ItemContext, ItemContextProvider } from "./itemsContext";

function ItemContextContainer({ children }) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    getAllItems();
  }, []);

  const calculateCartTotal = () => {
    setCartTotal(cartItems.reduce((acc, item) => (acc += item.subTotal), 0));
  };

  const getAllItems = () =>
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setItems(res);
      });

  const deleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    const index = cartItems.findIndex((item) => item.id === id);
    cartItems[index].quantity = quantity;
    cartItems[index].subTotal =
      parseFloat(cartItems[index].price) * parseInt(cartItems[index].quantity);
    setCartItems(cartItems);
  };

  const setCart = (item) => {
    item.quantity = 1;
    item.subTotal = parseFloat(item.price) * parseInt(item.quantity);
    setCartItems((prev) => [...prev, item]);
  };

  const contextValues = {
    items,
    setItems,
    getAllItems,
    cartItems,
    setCartItems,
    setCart,
    deleteItem,
    updateQuantity,
    cartTotal,
    calculateCartTotal,
  };

  return (
    <ItemContextProvider value={contextValues}>{children}</ItemContextProvider>
  );
}

export default ItemContextContainer;

export const useItemContext = () => useContext(ItemContext);
