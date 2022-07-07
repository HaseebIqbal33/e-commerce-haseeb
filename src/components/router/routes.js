import AddItem from "../add-item/AddItem";
import Cart from "../cart/Cart";
import Home from "../home/Home";

export const ROUTES = [
  { id: 1, route: "/", component: <Home />, title: "Men" },
  { id: 2, route: "/add-item", component: <AddItem />, title: "Add Item" },
  { id: 3, route: "/cart", component: <Cart />, title: "Cart" },
];
