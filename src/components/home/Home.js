import React from "react";
import classes from "./home.module.scss";
import Item from "./item/Item";
import { useItemContext } from "../context/ItemContextContainer";

function Home() {
  const { items } = useItemContext();

  return (
    <div>
      <div className={classes["items"]}>
        {items.map((item) => (
          <Item key={item.id} item={item} alt="Item" />
        ))}
      </div>
    </div>
  );
}

export default Home;
