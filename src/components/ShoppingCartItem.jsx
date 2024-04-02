import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { UseCart } from "../contexts/CartContext";

const Item = (props) => {
  const { removeItem } = UseCart();
  return (
    <ScCartItem>
      <img
        crossOrigin="anonymous"
        src={props.image}
        alt={`${props.title} book`}
      />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button
          onClick={() => {
            removeItem(props.order);
          }}
        >
          Remove from cart
        </button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
