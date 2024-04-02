import React from "react";
import { ScCartCheckout } from "./scParts";

import Item from "./ShoppingCartItem";
import { UseCart } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart } = UseCart();

  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item, idx) => (
        <Item key={`${item.id}_${idx}`} order={idx} {...item} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
