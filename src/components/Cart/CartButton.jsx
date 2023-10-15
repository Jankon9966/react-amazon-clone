import React from "react";
import "../../css/CartButton.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <Link className="cart_container" to="/cart">
      <div className="cart">
        <div className="quantity">1</div>
        <AiOutlineShoppingCart fontSize={34} style={{margin: "0 25px 0 6px"}} />
        <span>Cart</span>
      </div>
    </Link>
  );
};

export default CartButton;
