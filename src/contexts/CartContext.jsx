import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("s11g1", []);

  const addItem = (item) => {
    // verilen itemi sepete ekle
    setCart([...cart, item]);
  };

  const removeItem = (idx) => {
    const filteredCart = cart.filter((_, i) => {
      return i !== idx;
    });
    setCart(filteredCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const UseCart = () => useContext(CartContext);
