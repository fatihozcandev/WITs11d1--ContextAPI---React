import React from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { UseCart } from "../contexts/CartContext";

const Navigation = (props) => {
  const { cart } = UseCart();
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
