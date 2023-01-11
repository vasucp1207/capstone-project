import React, { useContext } from "react";
import { Context } from "../context";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removeFromCart(item.id)}
      ></i>
      <img src={item.url} alt="" width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
