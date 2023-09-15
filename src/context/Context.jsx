import React, { createContext, useContext, useReducer } from "react";
import customArray from "../components/AdultCombos";
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const products = customArray.map((item) => ({
    id: item.id,
    name: item.name,
    imageSrc: item.imageSrc,
    price: item.price,
    time: item.time,
    desc: item.desc,
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
    notification: {
      message: "",
      isOpen: false,
    },
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
